
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CZ0dCDgn.js","/cdn/shopifycloud/checkout-web/assets/c1/app.C64GqmQ1.js","/cdn/shopifycloud/checkout-web/assets/c1/630ba094.D6Cf0_XP.js","/cdn/shopifycloud/checkout-web/assets/c1/4509beb0.R3_-EHgf.js","/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.DzOOskgs.js","/cdn/shopifycloud/checkout-web/assets/c1/f025431a.BlsbPO0-.js","/cdn/shopifycloud/checkout-web/assets/c1/6ec9a0fa.CZV7_daJ.js","/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.DnY4jLuN.js","/cdn/shopifycloud/checkout-web/assets/c1/f4abf1ad.DIxl8T8o.js","/cdn/shopifycloud/checkout-web/assets/c1/17324a0b.B8ZEKjbG.js","/cdn/shopifycloud/checkout-web/assets/c1/0f5b1987.DB_rwJ_l.js","/cdn/shopifycloud/checkout-web/assets/c1/9e5d8eb8.LM7m9FaB.js","/cdn/shopifycloud/checkout-web/assets/c1/a45fed45.DWPpd6Lq.js","/cdn/shopifycloud/checkout-web/assets/c1/c328865d.Bj11LM-n.js","/cdn/shopifycloud/checkout-web/assets/c1/f1384cc2.BX1JbjgR.js","/cdn/shopifycloud/checkout-web/assets/c1/4618373b.Cy77ykD1.js","/cdn/shopifycloud/checkout-web/assets/c1/486c3fda.Yc_yBgVK.js","/cdn/shopifycloud/checkout-web/assets/c1/17f6d6d8.BXNb1jCN.js","/cdn/shopifycloud/checkout-web/assets/c1/19286c78.DksVDlME.js","/cdn/shopifycloud/checkout-web/assets/c1/cb6adac5.Bl30j75Z.js","/cdn/shopifycloud/checkout-web/assets/c1/c7b92b97.B69_RY1v.js","/cdn/shopifycloud/checkout-web/assets/c1/faece749.iTKhc7BG.js","/cdn/shopifycloud/checkout-web/assets/c1/77d9e668.DH7n9Dki.js","/cdn/shopifycloud/checkout-web/assets/c1/17db3e71.D1GUxxTC.js","/cdn/shopifycloud/checkout-web/assets/c1/6b0dea54.D6uteGpw.js","/cdn/shopifycloud/checkout-web/assets/c1/77821758.CIHBOvKY.js","/cdn/shopifycloud/checkout-web/assets/c1/9c33421f.CJpfzBPa.js","/cdn/shopifycloud/checkout-web/assets/c1/2c7267bc.D0fNkjc7.js","/cdn/shopifycloud/checkout-web/assets/c1/37c3ef79.Ch8z5ka0.js","/cdn/shopifycloud/checkout-web/assets/c1/82d59f8f.C4pxkhui.js","/cdn/shopifycloud/checkout-web/assets/c1/651bb548.BYbNkOW8.js","/cdn/shopifycloud/checkout-web/assets/c1/4661cd61.DzHDkeFR.js","/cdn/shopifycloud/checkout-web/assets/c1/928dbd30.Dqz8wC2M.js","/cdn/shopifycloud/checkout-web/assets/c1/08e2c58d.B-FZYDUx.js","/cdn/shopifycloud/checkout-web/assets/c1/a8202753.DSOOZT3U.js","/cdn/shopifycloud/checkout-web/assets/c1/2f5db8a5.DJK10HOJ.js","/cdn/shopifycloud/checkout-web/assets/c1/c0466e46.3jMVbOtP.js","/cdn/shopifycloud/checkout-web/assets/c1/83f74304.DJnrzEr6.js","/cdn/shopifycloud/checkout-web/assets/c1/7edfee1d.DQszgWo5.js","/cdn/shopifycloud/checkout-web/assets/c1/ce604576.DRj3vMAG.js","/cdn/shopifycloud/checkout-web/assets/c1/b01c110b.DSR_TSoj.js","/cdn/shopifycloud/checkout-web/assets/c1/4e32eceb.Brd5q1On.js","/cdn/shopifycloud/checkout-web/assets/c1/f00fed33.CGAGOo61.js","/cdn/shopifycloud/checkout-web/assets/c1/94493b3a.DDgFaG-q.js","/cdn/shopifycloud/checkout-web/assets/c1/99cd9b25.Crl3N52r.js","/cdn/shopifycloud/checkout-web/assets/c1/676eb8e9.CzH3fwL8.js","/cdn/shopifycloud/checkout-web/assets/c1/a9ee22a0.C2q1oVzC.js","/cdn/shopifycloud/checkout-web/assets/c1/56132226.DDRFSq_E.js","/cdn/shopifycloud/checkout-web/assets/c1/842452fd.DUFNLtTG.js","/cdn/shopifycloud/checkout-web/assets/c1/4296d9aa.C_KywlWY.js","/cdn/shopifycloud/checkout-web/assets/c1/3ff26d79.BmJnYNbc.js","/cdn/shopifycloud/checkout-web/assets/c1/2e90ff7a.BToQD0CL.js","/cdn/shopifycloud/checkout-web/assets/c1/a1e203ee.BrHArY2i.js","/cdn/shopifycloud/checkout-web/assets/c1/f0d1912a.Duiz0Iyw.js","/cdn/shopifycloud/checkout-web/assets/c1/e4ba0749.C-O76PxO.js","/cdn/shopifycloud/checkout-web/assets/c1/1493337c.B9PEl7H4.js","/cdn/shopifycloud/checkout-web/assets/c1/4b77f49a.DVp92J7R.js","/cdn/shopifycloud/checkout-web/assets/c1/41038fc5.BcueT_cw.js","/cdn/shopifycloud/checkout-web/assets/c1/071c0ba4.BdUCyUI_.js","/cdn/shopifycloud/checkout-web/assets/c1/8d9b1fe6.DTg5Zv_a.js","/cdn/shopifycloud/checkout-web/assets/c1/58f88e89.DayetqHq.js","/cdn/shopifycloud/checkout-web/assets/c1/4db11b69.dxHf5yvO.js","/cdn/shopifycloud/checkout-web/assets/c1/66ce9bb7.k6w15WuI.js","/cdn/shopifycloud/checkout-web/assets/c1/10dab80e.DpwFlDk5.js","/cdn/shopifycloud/checkout-web/assets/c1/2bff2525.5vsOsFwV.js","/cdn/shopifycloud/checkout-web/assets/c1/a56386a6.C0yEXL6l.js","/cdn/shopifycloud/checkout-web/assets/c1/c1e3be47.BnxSIiO2.js","/cdn/shopifycloud/checkout-web/assets/c1/1befea5c.BDsfQWYr.js","/cdn/shopifycloud/checkout-web/assets/c1/4431ba3a.BE2SfROz.js","/cdn/shopifycloud/checkout-web/assets/c1/aa1a9f41.Ceqqdz-2.js","/cdn/shopifycloud/checkout-web/assets/c1/70676095.tEaLU5xC.js","/cdn/shopifycloud/checkout-web/assets/c1/3cbb1bee.BfZrLvb_.js","/cdn/shopifycloud/checkout-web/assets/c1/b0920c52.BfPQZQ0A.js","/cdn/shopifycloud/checkout-web/assets/c1/a0df1226.xjNo4qER.js","/cdn/shopifycloud/checkout-web/assets/c1/0754daa8.JxjqlnDw.js","/cdn/shopifycloud/checkout-web/assets/c1/8b7d6012.CRbe5en7.js","/cdn/shopifycloud/checkout-web/assets/c1/8d7e1337.D1SAQfdV.js","/cdn/shopifycloud/checkout-web/assets/c1/30df5a02.7lehwHVk.js","/cdn/shopifycloud/checkout-web/assets/c1/565bff04.-lxJTF6U.js","/cdn/shopifycloud/checkout-web/assets/c1/c1adaf81.Cx57sSL5.js","/cdn/shopifycloud/checkout-web/assets/c1/33cd60c3.LstUQUHF.js","/cdn/shopifycloud/checkout-web/assets/c1/394584e5.vutYWRwW.js","/cdn/shopifycloud/checkout-web/assets/c1/40bf165a.QD-XSFA-.js","/cdn/shopifycloud/checkout-web/assets/c1/3c7ea602.CLtPY5sT.js","/cdn/shopifycloud/checkout-web/assets/c1/8b1d1f25.Cmh0qGks.js","/cdn/shopifycloud/checkout-web/assets/c1/49758c58.ub_wKj5Y.js","/cdn/shopifycloud/checkout-web/assets/c1/6073d960.CFyLPHtx.js","/cdn/shopifycloud/checkout-web/assets/c1/68101692.Cs1QZ9Ob.js","/cdn/shopifycloud/checkout-web/assets/c1/729daf6a.Cx1NOv9o.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.Bkw9oav-.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.CZdpQ8gH.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.qLDcQEZF.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CGRs8DQS.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/deferred-boot.HEpal1XU.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/256cc32287.B1YSPUDc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/a50c8864f4.COdDyHmf.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/7188aae948xccd7bc85.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/90ea855f49.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/69c8bed031.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/621ec27e44.B5DPTpH4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1x0e0212c9.ct4xfivv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/fed0657f2bxc9b4d095.CuRoM9zv.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/6e3faf45e1.Du9dByaI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/5caf6ce603.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e36cbfe439.B-Ue_WuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4eb5df94d4.Ch1OLzjf.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/094b08b72ax6347b32e.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/b8ae203a5b.D9SfDfsb.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4eb5df94d4xccd7bc85.BLwMKVOp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/966e3f4d79.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4eb5df94d4x8d382f2f.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/e8404cbaefx27591707.B68J3GgF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4eb5df94d4x8800e970.DyqIVqbZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/4eb5df94d4xdf1e779b.CpR5hiDV.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/roboto/roboto_n4.2019d890f07b1852f56ce63ba45b2db45d852cba.woff2?h1=Y2ljYXRyaWJlbS5jb20uYnI&hmac=7978b132814ef998d3c55f34bd71e79255eff395ce4313c598c403df209982f6","https://fonts.shopifycdn.com/roboto/roboto_n5.250d51708d76acbac296b0e21ede8f81de4e37aa.woff2?h1=Y2ljYXRyaWJlbS5jb20uYnI&hmac=1562d835be3e7a7f913615fae112afe91c1c6e5f42644ab08df0b67a8a118889"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0851/7972/8193/files/LogoSite_x320.png?v=1710438685"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  