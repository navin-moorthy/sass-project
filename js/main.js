// TODO: add better comments
// Mobile Navbar

document.addEventListener("DOMContentLoaded", function (e) {
  const hamburgerMenuIcon = document.querySelector(".pe-c-menu__hamburger");
  const menuOverlay = document.querySelector(".pe-c-menu__overlay");

  function toggleMenu() {
    hamburgerMenuIcon.classList.toggle("pe-c-menu__hamburger--open");
    document.body.classList.toggle("pe-c-menu--open");
  }

  hamburgerMenuIcon.addEventListener("click", toggleMenu, false);
  menuOverlay.addEventListener("click", toggleMenu, false);
});

var glideInstance = null;

/**
 * Initialize Carousal.
 */
function initializeCtaListCarousel() {
  window.addEventListener("load", function () {
    glideInstance = new Glide(".glide", {
      // focusAt: "center",
      type: "carousel",
      // autoplay: 4000,
      startAt: 0,
      perView: 3,
      gap: 30,

      breakpoints: {
        991: {
          perView: 2,
          peek: {
            before: 50,
            after: 50,
          },
        },
        767: {
          perView: 1,
          peek: {
            before: 50,
            after: 50,
          },
        },
        576: {
          perView: 1,
          peek: {
            before: 52,
            after: 52,
          },
        },
      },
    });

    if (window.outerWidth < 992) {
      const container = document.querySelector(".pe-l-journey > .container");

      //  To make it extend outside
      if (container) {
        container.classList.remove("container");
        container.classList.add("full-width-container");
      }
    }

    glideInstance.mount();
  });
}

/**
 * Change Carousal configuration on resize
 */
function changeCarouselConfiguration() {
  if (window.outerWidth < 992) {
    const container = document.querySelector(".pe-l-journey > .container");
    //  To make it extend outside
    if (container) {
      container.classList.remove("container");
      container.classList.add("full-width-container");
    }
  } else {
    const container = document.querySelector(".pe-l-journey > .full-width-container");
    if (container) {
      container.classList.add("container");
      //  To make it extend outside
      container.classList.remove("full-width-container");
    }
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  /**
   *  Initialize Carousal.
   */
  initializeCtaListCarousel();
  window.addEventListener("resize", changeCarouselConfiguration);

  /**
   * Initialize Autocomplete.
   */
  new autoComplete({
    data: {
      src: async function () {
        return [
          {
            title: "Invesco India Opportunities Growth",
            value: "invesco_growth",
            type: "top-ranked",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-invesco.svg",
            },
          },
          {
            title: "Axis Long Term Opportunities Growth",
            value: "axis_equity",
            type: "top-ranked",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-axis.svg",
            },
          },
          {
            title: "Kotak Standard Opportunities Growth",
            value: "kotak_standard",
            type: "top-ranked",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/small-logo-kotak.svg",
              type: "top-ranked",
            },
          },
          {
            title: "Tata Tax Opportunities Growth",
            value: "tata_tax",
            type: "top-ranked",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/logo/logo-tata-small.svg",
            },
          },
          {
            title: "Mirae Asset Opportunities Growth",
            value: "mirae_asset_growth",
            type: "top-ranked",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-mirae.svg",
            },
          },

          {
            title: "Invesco Long Term Equity Fund",
            value: "invesco_growth",
            type: "top-ranked",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-invesco.svg",
            },
          },
          {
            title: "Axis Long Term Equity Fund",
            value: "axis_equity",
            type: "top-ranked",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-axis.svg",
            },
          },
          {
            title: "Kotak Long Term Equity Fund",
            value: "kotak_standard",
            type: "recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/small-logo-kotak.svg",
            },
          },
          {
            title: "Tata Tax Long Term Equity Fund",
            value: "tata_tax",
            type: "recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/logo/logo-tata-small.svg",
            },
          },
          {
            title: "Mirae Asset Long Term Equity Fund",
            value: "mirae_asset_growth",
            type: "recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/small-logo-mirae.svg",
            },
          },

          {
            title: "Invesco India Multicap Growth",
            value: "invesco_growth",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-invesco.svg",
            },
          },
          {
            title: "Axis Long Term Multicap Growth",
            value: "axis_equity",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-axis.svg",
            },
          },
          {
            title: "Kotak Standard Multicap Growth",
            value: "kotak_standard",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-kotak.svg",
            },
          },
          {
            title: "Tata Tax Multicap Growth",
            value: "tata_tax",
            type: "recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/logo/logo-tata-small.svg",
            },
          },
          {
            title: "Mirae Asset Multicap Growth",
            value: "mirae_asset_growth",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-mirae.svg",
            },
          },

          {
            title: "Invesco India Saver Fund",
            value: "invesco_growth",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-invesco.svg",
            },
          },
          {
            title: "Axis Long Term Saver Fund",
            value: "axis_equity",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-axis.svg",
            },
          },
          {
            title: "Kotak Standard Saver Fund",
            value: "kotak_standard",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-kotak.svg",
            },
          },
          {
            title: "Tata Tax Saver Fund",
            value: "tata_tax",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/logo/logo-tata-small.svg",
            },
          },
          {
            title: "Mirae Asset Saver Fund",
            value: "mirae_asset_growth",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-mirae.svg",
            },
          },

          {
            title: "Invesco India Large Cap Growth",
            value: "invesco_growth",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-invesco.svg",
            },
          },
          {
            title: "Axis Long Large Cap Growth",
            value: "axis_equity",
            type: "not-recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/small-logo-axis.svg",
            },
          },
          {
            title: "Kotak Standard Large Cap Growth",
            value: "kotak_standard",
            type: "not-recommended",
            cap: "Small Cap",
            meta: {
              image: "./images/svg/small-logo-kotak.svg",
            },
          },
          {
            title: "Tata Tax Large Cap Growth",
            value: "tata_tax",
            type: "recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/logo/logo-tata-small.svg",
            },
          },
          {
            title: "Mirae Asset Large Cap Growth",
            value: "mirae_asset_growth",
            type: "not-recommended",
            cap: "Large Cap",
            meta: {
              image: "./images/svg/small-logo-mirae.svg",
            },
          },
        ];
      },
      key: ["title", "type", "cap"],
      cache: false,
    },
    placeHolder: "Search for a mutual fund", // Place Holder text                 | (Optional)
    selector: "#autoComplete", // Input field selector              | (Optional)
    debounce: 400, // Post duration for engine to start | (Optional)
    trigger: function () {
      debugger;
    },
    searchEngine: "strict",
    query: {
      manipulate: function (query) {
        return query;
      },
    },
    resultsList: {
      // Rendered results list object      | (Optional)
      render: true,
      container: (source) => {
        // Render the enter ul with class
        source.setAttribute("class", "pe-c-autocomplete__list");

        const destination = document.getElementById("autoComplete");

        function handleInputChange(event) {
          // Event listener for removing the listItems on document click
          const hideSearchResults = () => {
            while (source.firstChild) {
              source.removeChild(source.firstChild);
            }
          };

          document.addEventListener("click", hideSearchResults, { once: true });

          const query = this.value;
          if (!query.length > 0) return;

          // when the search count is greater than 5 and the query length has value
          if (event.detail.results.length > 0) {
            // Assign total count, from the API here
            const totalCount = 48;
            const result = document.createElement("li");

            result.classList.add("pe-c-autocomplete__list--all-results");
            result.innerHTML = `
            <a href="#" target="_blank">
              <span>See all ${totalCount} results for </span>
              <span>${query}</span>
              <img src="./images/svg/right-arrow.svg" alt="right-arrow">
            </a>`;

            // Insert see all results and remove any no results
            setTimeout(() => {
              const noResults = document.querySelector(".pe-c-autocomplete__list--no-results");

              if (noResults) {
                noResults.remove();
              }

              source.appendChild(result);
            }, 1);
          }
        }

        destination.addEventListener("autoComplete", handleInputChange);
      },
      destination: document.querySelector("#autoComplete"),
      position: "afterend",
      element: "ul",
    },
    // maxResults: 5, // Max. number of rendered results | (Optional)
    highlight: true, // Highlight matching results      | (Optional)

    resultItem: {
      content: (data, source) => {
        source.innerHTML = `
          <div class="pe-c-fund-card d-flex align-items-center">
            <div class="pe-c-recommended__border ${
              data.value.type == "recommended" ? "pe-c-recommended__border--active" : ""
            }"></div>
            <figure class="pe-c-fund-card__logo">
              <img src="${data.value && data.value.meta ? data.value.meta.image : ""}" alt="${data.match}" />
            </figure>
            <div class="pe-c-fund-card__info flex-fill">
              <h6 class="pe-h6 pe-overflow-ellipsis">
                ${data && data.value ? data.value.title : ""}
              </h6>
              <div class="d-flex align-items-center">
                <p class="pe-p__xs mr-2">${data && data.value ? data.value.cap : ""}</p>
                <p class="pe-c-badge ${data.value.type}">${data && data.value ? data.value.type : ""}</p>
              </div>
            </div>
          </div>`;
      },
      element: "li",
    },
    noResults: () => {
      // Create an li tag with no results
      const query = document.querySelector("#autoComplete").value;
      const result = document.createElement("li");
      result.classList.add("pe-c-autocomplete__list--no-results");
      result.setAttribute("tabindex", "1");

      // Append the content
      result.innerHTML = `<span>No Results for</span> <span>"${query}"</span>`;
      document.querySelector(".pe-c-autocomplete__list").appendChild(result);

      // When there is no results, see all results section has to be manually removed
      const seeAllResults = document.querySelector(".pe-c-autocomplete__list--all-results");
      if (seeAllResults) {
        seeAllResults.remove();
      }
    },
    onSelection: (feedback) => {
      // Action script onSelection event | (Optional)
      console.log(feedback.selection.value.image_url);
    },
  });

  tinytabs(document.querySelector(".pe-c-fund-tabs"), {
    anchor: false,
    hideTitle: true,
  });

  tinytabs(document.querySelector(".pe-c-rating-tabs"), {
    anchor: false,
    hideTitle: true,
  });

  tinytabs(document.querySelector(".pe-c-faq-tabs"), {
    anchor: false,
    hideTitle: true,
  });

  new handorgel(document.querySelector(".pe-c-faq-accordian__rating"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-faq-accordian__rating__header--open",
    contentOpenClass: "pe-c-faq-accordian__rating__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-faq-accordian__rating__header--opened",
    contentOpenedClass: "pe-c-faq-accordian__rating__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-faq-accordian__rating__header--focus",
    contentFocusClass: "pe-c-faq-accordian__rating__content--focus",
  });

  new handorgel(document.querySelector(".pe-c-faq-accordian__invest"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-faq-accordian__invest__header--open",
    contentOpenClass: "pe-c-faq-accordian__invest__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-faq-accordian__invest__header--opened",
    contentOpenedClass: "pe-c-faq-accordian__invest__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-faq-accordian__invest__header--focus",
    contentFocusClass: "pe-c-faq-accordian__invest__content--focus",
  });

  new handorgel(document.querySelector(".pe-c-faq-accordian__fees"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-faq-accordian__fees__header--open",
    contentOpenClass: "pe-c-faq-accordian__fees__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-faq-accordian__fees__header--opened",
    contentOpenedClass: "pe-c-faq-accordian__fees__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-faq-accordian__fees__header--focus",
    contentFocusClass: "pe-c-faq-accordian__fees__content--focus",
  });

  const ratingAccordion = new handorgel(document.querySelector(".pe-c-rating-accordion"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,
    // whether the folds are collapsible
    collapsible: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-rating-accordion__header--open",
    contentOpenClass: "pe-c-rating-accordion__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-rating-accordion__header--opened",
    contentOpenedClass: "pe-c-rating-accordion__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-rating-accordion__header--focus",
    contentFocusClass: "pe-c-rating-accordion__content--focus",
  });

  ratingAccordion.on("fold:open", (fold) => {
    const recommended = document.querySelector(".pe-p__rating-button.recommended");
    const topRanked = document.querySelector(".pe-p__rating-button.top-ranked");
    if (fold.id === "handorgel4-fold1") {
      recommended.style["box-shadow"] = "unset";
      topRanked.style["box-shadow"] = "0px 1px 0px rgba(0, 12, 67, 0.1)";
    }

    if (fold.id === "handorgel4-fold2") {
      console.dir(fold.content);
      topRanked.style["box-shadow"] = "unset";
    }

    if (fold.id === "handorgel4-fold3") {
      console.dir(fold.content);
      recommended.style["box-shadow"] = "0px 1px 0px rgba(0, 12, 67, 0.1)";
    }
  });

  new handorgel(document.querySelector(".pe-c-footer__accordion1"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-footer__accordion1__header--open",
    contentOpenClass: "pe-c-footer__accordion1__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-footer__accordion1__header--opened",
    contentOpenedClass: "pe-c-footer__accordion1__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-footer__accordion1__header--focus",
    contentFocusClass: "pe-c-footer__accordion1__content--focus",
  });

  new handorgel(document.querySelector(".pe-c-footer__accordion2"), {
    // whether multiple folds can be opened at once
    multiSelectable: false,

    // header/content class if fold is open
    headerOpenClass: "pe-c-footer__accordion2__header--open",
    contentOpenClass: "pe-c-footer__accordion2__content--open",

    // header/content class if fold has been opened (transition finished)
    headerOpenedClass: "pe-c-footer__accordion2__header--opened",
    contentOpenedClass: "pe-c-footer__accordion2__content--opened",

    // header/content class if fold has been focused
    headerFocusClass: "pe-c-footer__accordion2__header--focus",
    contentFocusClass: "pe-c-footer__accordion2__content--focus",
  });
});
