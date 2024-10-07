const featuresButton = document.querySelector(".features");
const companyButton = document.querySelector(".company");

const FeaturesContainer = document.querySelector(".features-container");
const company = document.querySelector(".company-container");
const arrowImage =document.querySelector("#up-arrow");
const arrowImageCompany =document.querySelector("#up-arrow-company");

function displayFeatures() {
  FeaturesContainer.style.transform = "translateY(40px)";

  if (FeaturesContainer.style.display === "none") {
    FeaturesContainer.style.display = "block";
    arrowImage.src="Images/icon-arrow-down.svg";
  } else {
    FeaturesContainer.style.display = "none";
    arrowImage.src="Images/icon-arrow-up.svg";
  }
}
function displayCompany() {
  company.style.transform = "translateY(30px)";
  company.style.transition="";

  if (company.style.display === "none") {
    company.style.display = "block";
    arrowImageCompany.src="Images/icon-arrow-down.svg";
  } else {
    company.style.display = "none";
    arrowImageCompany.src="Images/icon-arrow-up.svg";
  }
}

featuresButton.addEventListener("click", displayFeatures);
companyButton.addEventListener("click", displayCompany);
