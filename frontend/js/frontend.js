console.log("Hello from the frontend!");

function listings() {
  const me = {};

  me.showError = ({ msg, res, type = "danger" } = {}) => {
    const main = document.querySelector("main");
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.role = "type";
    alert.innerText = `${msg} (${res.status}: ${res.statusText})`;
    main.prepend(alert);
  };

  const renderListingDetails = ({ title, address, price, bedrooms, notes }) => {
    const detailsDiv = document.querySelector("#listing-details");
    detailsDiv.innerHTML = `
      <h5 class="card-title">${title}</h5>
      <p class="mb-1"><strong>Address:</strong> ${address}</p>
      <p class="mb-1"><strong>Price:</strong> ${price}</p>
      <p class="mb-1"><strong>Bedrooms:</strong> ${bedrooms}</p>
      <p class="mb-0"><strong>Notes:</strong> ${notes}</p>
    `;
  };

  const renderListings = (allListings) => {
    const listingsDiv = document.querySelector("#listings");

    for (const listing of allListings) {
      const { title, address, price, bedrooms } = listing;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card mb-3 p-3 text-start";
      card.innerHTML = `<div>${title} | ${address} | ${price} | ${bedrooms} bed</div>`;
      card.addEventListener("click", () => renderListingDetails(listing));
      listingsDiv.appendChild(card);
    }

    if (allListings.length > 0) {
      renderListingDetails(allListings[0]);
    }
  };

  me.refreshListings = async function () {
    const res = await fetch("/api/listings");
    if (!res.ok) {
      console.error("Failed to fetch listings:", res.statusText);
      me.showError({ msg: "Failed to load listings", res });
      return;
    }

    const data = await res.json();
    console.log("Fetched listings:", data);

    const listingsDiv = document.querySelector("#listings");
    listingsDiv.innerHTML = "";

    renderListings(data.listings);
  };

  return me;
}

const myListings = listings();
myListings.refreshListings();
