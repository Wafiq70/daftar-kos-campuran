
      function handleSearch() {
        const searchInput = document
          .getElementById("search-bar")
          .value.toLowerCase();
        const kosList = document.getElementById("daftar-kos-list");
        const kosItems = kosList.getElementsByClassName("daftar-kos-item");

        for (let i = 0; i < kosItems.length; i++) {
          const kosItem = kosItems[i];
          const name = kosItem.querySelector("h2").textContent.toLowerCase();
          const location = kosItem
            .querySelector(".location")
            .textContent.toLowerCase();

          if (name.includes(searchInput) || location.includes(searchInput)) {
            kosItem.style.display = "";
          } else {
            kosItem.style.display = "none";
          }
        }
      }

      function toggleMenu() {
        const navMenu = document.getElementById("nav-menu");
        navMenu.style.display =
          navMenu.style.display === "flex" ? "none" : "flex";
        navMenu.classList.toggle("show");
      }
