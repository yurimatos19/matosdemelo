/* Matos de Melo Advocacia — comportamento do site (sem dependências) */
(function () {
    var WHATSAPP = '5581992992676';

    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Cabeçalho: transparente sobre a foto, sólido ao rolar, some ao descer e volta ao subir.
    // O botão flutuante do WhatsApp só aparece depois do topo da página.
    var header = document.querySelector('.site-header');
    var floatBtn = document.querySelector('.whatsapp-float');
    var lastY = window.scrollY;
    function onScroll() {
        var y = window.scrollY;
        header.classList.toggle('solid', y > 40);
        var menuOpen = header.classList.contains('menu-open');
        header.classList.toggle('hide', !menuOpen && y > 400 && y > lastY);
        if (floatBtn) floatBtn.classList.toggle('visible', y > window.innerHeight * 0.6);
        lastY = y;
    }
    if (header) { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); }

    // Revelações por máscara quando o elemento entra na tela.
    // Checagem por posição a cada rolagem: não perde nada mesmo com rolagem rápida no celular.
    var pending = Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-img'));
    function revealCheck() {
        var limit = window.innerHeight * 0.92;
        pending = pending.filter(function (el) {
            var box = (el.parentElement || el).getBoundingClientRect();
            if (calm || box.top < limit) { el.classList.add('in'); return false; }
            return true;
        });
        if (!pending.length) window.removeEventListener('scroll', onRevealScroll);
    }
    var revealQueued = false;
    function onRevealScroll() {
        if (revealQueued) return;
        revealQueued = true;
        requestAnimationFrame(function () { revealQueued = false; revealCheck(); });
    }
    revealCheck();
    window.addEventListener('scroll', onRevealScroll, { passive: true });
    window.addEventListener('resize', onRevealScroll);

    // Declaração da home: as palavras acendem conforme a leitura avança
    document.querySelectorAll('[data-words]').forEach(function (el) {
        var words = el.textContent.trim().split(/\s+/);
        el.textContent = '';
        words.forEach(function (w, i) {
            var span = document.createElement('span');
            span.className = 'w';
            span.textContent = w;
            el.appendChild(span);
            if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
        });
        var spans = el.querySelectorAll('.w');
        function paint() {
            var r = el.getBoundingClientRect();
            var vh = window.innerHeight;
            var p = calm ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
            var lit = Math.round(p * spans.length);
            spans.forEach(function (s, i) { s.classList.toggle('on', i < lit); });
        }
        paint();
        window.addEventListener('scroll', paint, { passive: true });
    });

    // Números que contam ao aparecer
    var counters = document.querySelectorAll('[data-count]');
    if ('IntersectionObserver' in window && !calm) {
        var cio = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (!en.isIntersecting) return;
                cio.unobserve(en.target);
                var el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || '';
                var from = end > 1900 && end < 2100 ? end - 20 : 0, t0 = performance.now();
                (function tick(t) {
                    var k = Math.min(1, (t - t0) / 1600), e = 1 - Math.pow(1 - k, 3);
                    var v = Math.round(from + (end - from) * e);
                    el.textContent = (end >= 1000 && end < 1900 ? v.toLocaleString('pt-BR') : v) + suffix;
                    if (k < 1) requestAnimationFrame(tick);
                })(t0);
            });
        }, { threshold: 0.6 });
        counters.forEach(function (el) { cio.observe(el); });
    }

    // Depoimentos: um por vez, com setas
    document.querySelectorAll('[data-slider]').forEach(function (box) {
        var slides = box.querySelectorAll('.t-slide'), count = box.querySelector('.t-count b'), i = 0;
        function show(n) {
            i = (n + slides.length) % slides.length;
            slides.forEach(function (s, k) { s.classList.toggle('active', k === i); s.setAttribute('aria-hidden', k === i ? 'false' : 'true'); });
            count.textContent = i + 1;
        }
        box.querySelector('.t-prev').addEventListener('click', function () { show(i - 1); });
        box.querySelector('.t-next').addEventListener('click', function () { show(i + 1); });
        show(0);
        box.classList.add('ready');
    });

    // Imagem da faixa com leve paralaxe
    var parallax = document.querySelectorAll('[data-parallax]');
    if (parallax.length && !calm) {
        var tickP = function () {
            parallax.forEach(function (img) {
                var r = img.parentNode.getBoundingClientRect();
                var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
                img.style.transform = 'translate3d(0,' + (p * -9) + '%,0)';
            });
        };
        tickP();
        window.addEventListener('scroll', function () { requestAnimationFrame(tickP); }, { passive: true });
    }

    // Botão circular que acompanha o mouse de leve
    if (!calm && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('[data-magnetic]').forEach(function (btn) {
            btn.addEventListener('mousemove', function (e) {
                var r = btn.getBoundingClientRect();
                var x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
                btn.style.transform = 'translate(' + x * 0.25 + 'px,' + y * 0.25 + 'px)';
            });
            btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
        });
    }

    // Menu mobile
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    if (toggle && mobileNav) {
        var icon = toggle.querySelector('i');
        var setMenu = function (open) {
            mobileNav.classList.toggle('open', open);
            header.classList.toggle('menu-open', open);
            header.classList.remove('hide');
            document.documentElement.classList.toggle('menu-lock', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
            if (icon) icon.className = open ? 'ph-light ph-x' : 'ph-light ph-list';
        };
        toggle.addEventListener('click', function () { setMenu(!mobileNav.classList.contains('open')); });
        mobileNav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('open')) { setMenu(false); toggle.focus(); }
        });
        window.addEventListener('resize', function () { if (window.innerWidth >= 1180) setMenu(false); });
    }

    // Conversão do Google Ads: só conta quando a pessoa realmente clica para falar no WhatsApp
    function trackConversion() {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                send_to: 'AW-17620308629/gcY3CMuZnqYbEJWlgtJB',
                value: 1.0,
                currency: 'BRL'
            });
        }
    }
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href*="wa.me/"]');
        if (link) trackConversion();
    });

    var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    function extenso(d) { return d.getDate() + ' de ' + MESES[d.getMonth()] + ' de ' + d.getFullYear(); }
    function anosAtras(d, n) { var r = new Date(d); r.setFullYear(d.getFullYear() - n); return r; }
    var hoje = new Date();
    hoje.setHours(0, 0, 0, 0);

    // Abas acessíveis: triagem da home e linha do tempo da reforma.
    // Sem JavaScript, todos os painéis ficam visíveis.
    document.querySelectorAll('[data-tabs]').forEach(function (box) {
        var tabs = Array.prototype.slice.call(box.querySelectorAll('[role="tab"]'));
        box.classList.add('is-enhanced');
        function select(tab, focus) {
            tabs.forEach(function (t) {
                var on = t === tab;
                t.setAttribute('aria-selected', on ? 'true' : 'false');
                t.tabIndex = on ? 0 : -1;
                document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
            });
            if (focus) tab.focus();
        }
        tabs.forEach(function (tab, i) {
            tab.addEventListener('click', function () {
                select(tab);
                var panel = document.getElementById(tab.getAttribute('aria-controls'));
                if (window.innerWidth < 960 && panel && box.classList.contains('triage')) {
                    var top = panel.getBoundingClientRect().top + window.scrollY - 90;
                    window.scrollTo({ top: top, behavior: calm ? 'auto' : 'smooth' });
                }
            });
            tab.addEventListener('keydown', function (e) {
                var next = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
                if (next) { e.preventDefault(); select(tabs[(i + next + tabs.length) % tabs.length], true); }
            });
        });
        var start = tabs.filter(function (t) { return t.getAttribute('aria-selected') === 'true'; })[0] || tabs[0];
        select(start);
    });

    // Linha do tempo da reforma: marca a fase atual com base na data de hoje
    document.querySelectorAll('[data-timeline] [data-de]').forEach(function (tab) {
        var ano = hoje.getFullYear();
        if (ano >= +tab.dataset.de && ano <= +tab.dataset.ate) {
            tab.parentNode.classList.add('is-now');
            tab.insertAdjacentHTML('beforeend', '<span class="tl-now">Estamos aqui</span>');
            tab.click();
        }
    });

    // Janela de 5 anos para recuperar tributos (art. 168 do CTN), contada a partir de hoje
    var inicio = anosAtras(hoje, 5);
    document.querySelectorAll('[data-janela-hoje]').forEach(function (el) { el.textContent = extenso(hoje); });
    document.querySelectorAll('[data-janela-inicio], [data-janela-expira]').forEach(function (el) { el.textContent = extenso(inicio); });
    document.querySelectorAll('[data-janela-barra]').forEach(function (bar) {
        // 6 meses já vencidos + os 60 meses da janela, um traço por mês
        var html = '';
        for (var m = -6; m <= 60; m++) {
            var d = new Date(inicio.getFullYear(), inicio.getMonth() + m, 1);
            var cls = m < 0 ? 'lost' : (m === 0 ? 'edge' : 'open');
            var label = d.getMonth() === 0 ? '<i>' + d.getFullYear() + '</i>' : '';
            html += '<span class="' + cls + '">' + label + '</span>';
        }
        bar.innerHTML = html;
    });

    // Prévia de imagem ao passar o mouse pelas listas de serviços (só com mouse)
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.querySelectorAll('.practice-list').forEach(function (list) {
            var img = document.createElement('img');
            img.className = 'hover-preview';
            img.alt = '';
            document.body.appendChild(img);
            list.addEventListener('mousemove', function (e) {
                img.style.transform = 'translate(' + (e.clientX + 24) + 'px,' + (e.clientY - 90) + 'px)';
            });
            list.querySelectorAll('a[data-preview]').forEach(function (a) {
                a.addEventListener('mouseenter', function () { img.src = a.dataset.preview; img.classList.add('show'); });
                a.addEventListener('mouseleave', function () { img.classList.remove('show'); });
            });
        });
    }

    // Formulário de contato -> mensagem pronta no WhatsApp
    var form = document.getElementById('contact-form');
    if (form) {
        // Assunto escolhido na triagem da home chega pela URL (?assunto=...)
        var assunto = new URLSearchParams(location.search).get('assunto');
        if (assunto) {
            var select = form.querySelector('#interest');
            Array.prototype.forEach.call(select.options, function (o) { if (o.value === assunto) select.value = assunto; });
        }
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!form.reportValidity()) return;
            var d = new FormData(form);
            var lines = [
                'Olá, Dr. Osvaldo! Vim pelo site e gostaria de agendar uma conversa.',
                '',
                '*Nome:* ' + d.get('name'),
                d.get('company') ? '*Empresa:* ' + d.get('company') : null,
                '*Assunto:* ' + d.get('interest'),
                '',
                d.get('message')
            ].filter(function (l) { return l !== null; });
            var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(lines.join('\n'));
            trackConversion();
            window.open(url, '_blank', 'noopener');
            var ok = document.getElementById('form-success');
            if (ok) {
                ok.hidden = false;
                ok.querySelector('a').href = url;
            }
        });
    }
})();
