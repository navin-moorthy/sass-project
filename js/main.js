// Mobile Navbar
document.addEventListener("DOMContentLoaded", function (e) {
  const hamburgerMenuIcon = document.querySelector(".pe-c-menu__hamburger");

  function openMenu() {
    this.classList.toggle("pe-c-menu__hamburger--open");
  }

  hamburgerMenuIcon.addEventListener("click", openMenu, false);
});

// Search in hero section
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
      source.setAttribute("class", "autocomplete-options");
      source.setAttribute("id", "mutual_fund_list");

      document.getElementById("autoComplete").addEventListener("autoComplete", function (event) {
        // Event listener for hiding
        function hideSearchResults() {
          const searchResults = document.getElementById("mutual_fund_list");
          while (searchResults.firstChild) {
            searchResults.removeChild(searchResults.firstChild);
          }
          document.removeEventListener("click", hideSearchResults);
        }

        // Add count
        const query = document.querySelector("#autoComplete").value;

        // For search count
        if (query.length > 0) {
          // Assign total count, from the API here
          const totalCount = 48;

          const result = document.createElement("span");
          result.setAttribute("class", "see-all-results");

          result.innerHTML = `
              <a href="#" target="_blank">
                See all ${totalCount} results for <span>${query}</span>
                <figure>
                  <img src="./images/svg/right-arrow.svg" alt="right-arrow">
                </figure>
              </a>`;

          const optionsUl = document.querySelector(".autocomplete-options");

          // when the search count is greater than 5
          if (optionsUl && event.detail.results.length > 0) {
            // Insert see all results
            setTimeout(() => {
              const noResults = document.querySelector(".no-results");
              if (noResults) {
                noResults.remove();
              }
              optionsUl.appendChild(result);
            }, 100);
          }
        }

        // For hiding when clicked outside
        document.addEventListener("click", hideSearchResults);
      });
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
      <div class="mutual-fund-card ${data.value.type == "recommended" ? "recommended-border" : ""} search-item">
        <div class="mutual-fund-card-container">
          <div class="mutual-fund-card-content">
          <div class="recommend-border"></div>
            <figure>
            <img src="${data.value && data.value.meta ? data.value.meta.image : ""}" alt="${data.match}" />
            </figure>
            <div class="brand-info">
              <h4>
                ${data && data.value ? data.value.title : ""}
              </h4>
              <div class="badge-container">
                <p>${data && data.value ? data.value.cap : ""}</p>
                <p class="badge ${data.value.type}">${data && data.value ? data.value.type : ""}</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      `;
    },
    element: "li",
  },
  noResults: () => {
    // Create an li tag with no results
    const query = document.querySelector("#autoComplete").value;
    const result = document.createElement("li");
    result.setAttribute("class", "no-results");
    result.setAttribute("tabindex", "1");

    // Append the content
    result.innerHTML = `No Results for <span>${query}</span>`;
    document.querySelector(".autocomplete-options").appendChild(result);

    // When there is no results, see all results section has to be manually removed
    const seeAllResults = document.querySelector(".see-all-results");
    if (seeAllResults) {
      seeAllResults.remove();
    }
  },
  onSelection: (feedback) => {
    // Action script onSelection event | (Optional)
    console.log(feedback.selection.value.image_url);
  },
});
