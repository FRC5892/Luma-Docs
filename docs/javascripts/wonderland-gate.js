(function () {
  var path = window.location.pathname.replace(/\/+$/, "");
  if (path === "") {
    path = "/";
  }

  var isEntry = /\/jump-rabbit-hole$/.test(path);
  var isReturn = /\/return-to-kansas$/.test(path);
  var isWonderlandPage = /\/wonderland\//.test(path);

  if (isEntry) {
    sessionStorage.setItem("wonderland_access", "granted");
  }

  if (isReturn) {
    sessionStorage.removeItem("wonderland_access");
  }

  var hasAccess = sessionStorage.getItem("wonderland_access") === "granted";

  if (isWonderlandPage && !hasAccess) {
    window.location.replace("/");
  }
})();
