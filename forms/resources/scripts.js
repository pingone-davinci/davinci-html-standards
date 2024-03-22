// Form Functions
const setFieldFocus = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.focus();
  }
};

const makePasswordToggle = (id) => {
  let container = document.getElementById(id);

  if (container) {
    let password = container.getElementsByTagName("input")[0];
    let toggler = document.createElement("button");
    toggler.setAttribute("type", "button");
    toggler.setAttribute("aria-label", "Show/Hide Password");
    toggler.className =
      "btn mdi mdi-eye-off-outline position-absolute end-0 top-50 translate-middle-y";
    container.appendChild(toggler);

    function showHidePassword() {
      if (password.type == "password") {
        password.setAttribute("type", "text");
        toggler.classList.add("mdi-eye-outline");
        toggler.classList.remove("mdi-eye-off-outline");
      } else {
        toggler.classList.add("mdi-eye-off-outline");
        toggler.classList.remove("mdi-eye-outline");
        password.setAttribute("type", "password");
      }
      password.focus();
    }

    toggler.addEventListener("click", showHidePassword);
  }
};


const createBackButton = () => {
  // Assuming there's an existing div with an ID of 'navContainer' in your nav section
  let navContainer = document.createElement('div')

  navContainer.classList.add("top-left")

  let nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Page navigation');

  // Create the back button
  let backButton = document.createElement('a');
  backButton.innerHTML = '&#8592; Back';
  backButton.href = "../index.html";
  backButton.classList.add('back-button', 'btn', 'btn-primary', 'me-sm-3');
  navContainer.appendChild(backButton);

  // Create and add the view source button
  let viewSourceButton = createViewSourceButton();
  navContainer.appendChild(viewSourceButton);

  // Append the nav to the specified container
  nav.appendChild(navContainer);
  document.body.appendChild(nav);
}

const createViewSourceButton = () => {
  console.log("here")
  let viewSourceButton = document.createElement('button');
  viewSourceButton.innerText = 'View Page Source';
  viewSourceButton.classList.add('back-button', 'btn', 'btn-primary');
  viewSourceButton.addEventListener('click', viewPageSource);

  return viewSourceButton
}


const setFavicon = (url = "https://d3uinntk0mqu3p.cloudfront.net/branding/market/a3d073bc-3108-49ad-b96c-404bea59a1d0.png") => {
  let link = document.createElement('link');
  let existingIcon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');

  link.type = 'image/x-icon';
  link.rel = 'icon';
  link.href = url;

  if (existingIcon) {
    // Replace the existing favicon if one exists
    document.head.replaceChild(link, existingIcon);
  } else {
    // Add new favicon if none exists
    document.head.appendChild(link);
  }
}

const generateRandomText = (elementId) => {
  document.getElementById(elementId).innerHTML = generateLoremIpsum(9);
}

function generateLoremIpsum(paragraphCount) {
  const loremSentences = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Vivamus lacinia odio vitae vestibulum vestibulum.",
    "Suspendisse sed nisi lacus.",
    "Sed viverra, eros in sodales facilisis, tortor mauris cursus ante.",
    "Curabitur a fringilla ante.",
    "Phasellus finibus, nulla eget maximus elementum, odio augue ullamcorper libero.",
    "Etiam sit amet commodo nulla.",
    "Proin sodales, diam et tincidunt lobortis, arcu velit luctus nisi.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "In hac habitasse platea dictumst.",
    "Fusce id velit ut tortor pretium viverra.",
    "Sed et erat sed libero elementum fermentum.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  ];

  let loremIpsumText = "";

  for (let i = 0; i < paragraphCount; i++) {
    let paragraph = "";
    const sentencesPerParagraph = Math.floor(Math.random() * 5) + 3; // Generate between 3 and 7 sentences per paragraph

    for (let j = 0; j < sentencesPerParagraph; j++) {
      const sentence = loremSentences[Math.floor(Math.random() * loremSentences.length)];
      paragraph += sentence + " ";
    }

    loremIpsumText += "<p>" + paragraph.trim() + "</p>";
  }

  return loremIpsumText;
}

function viewPageSource() {
  const source = getSourceWithoutNav();
  const newWindow = window.open('', '_blank');

  if (newWindow) {
    const escapedSource = source
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

    const contentToDisplay = `<html><head><title>Page Source</title></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">${escapedSource}</pre></body></html>`;

    newWindow.document.write(contentToDisplay);
    newWindow.document.close(); 
  } else {
    alert('Popup blocked. Please allow popups for this website.');
  }
}

function getSourceWithoutNav() {
  let tempContainer = document.createElement('div');
  tempContainer.innerHTML = document.body.innerHTML;
  tempContainer.querySelectorAll('nav').forEach(nav => nav.remove());
  const sourceWithoutNav = tempContainer.innerHTML;

  return sourceWithoutNav;
}


