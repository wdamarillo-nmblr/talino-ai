/* Talino.ai — shared interactions */
(function () {
  "use strict";

  /* Mobile menu */
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("mainNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  /* Reveal on scroll */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* Hero typewriter (if target exists) */
  var target = document.getElementById("typeTarget");
  if (target) {
    var lines = [
      "settle payout USD→PHP … done in 1.8s",
      "quote 500 USDC → bank rails … cheapest route: 0.41%",
      "sweep treasury idle balance → yield rail",
      "verify beneficiary rural_bank:0142 … attested",
      "policy check: agent 'treasury-07' within limits ✓"
    ];
    var li = 0,
      ci = 0,
      del = false;
    (function tick() {
      var line = lines[li];
      if (!del) {
        target.textContent = line.slice(0, ++ci);
        if (ci === line.length) {
          del = true;
          return setTimeout(tick, 1900);
        }
        setTimeout(tick, 26 + Math.random() * 34);
      } else {
        target.textContent = line.slice(0, --ci);
        if (ci === 0) {
          del = false;
          li = (li + 1) % lines.length;
          return setTimeout(tick, 350);
        }
        setTimeout(tick, 12);
      }
    })();
  }

  /* Animate stat counters (data-count support) */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        obs.disconnect();
        var to = parseFloat(el.getAttribute("data-count"));
        var suffix = el.getAttribute("data-suffix") || "";
        var t0 = null;
        function frame(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1200, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent =
            (to % 1 ? (to * eased).toFixed(1) : Math.round(to * eased)) + suffix;
          if (p < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
      });
    });
    obs.observe(el);
  });

  /* Contact form: mailto + validation stub */
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var d = new FormData(form);
      var subject = encodeURIComponent("Talino.ai demo request — " + (d.get("interest") || "General"));
      var body = encodeURIComponent(
        "Name: " + d.get("name") +
        "\nEmail: " + d.get("email") +
        "\nCompany: " + d.get("company") +
        "\nInterest: " + d.get("interest") +
        "\n\n" + (d.get("message") || "")
      );
      window.location.href = "mailto:hello@talino.ai?subject=" + subject + "&body=" + body;
      var note = document.getElementById("formNote");
      if (note) note.style.display = "block";
    });
  }
})();
