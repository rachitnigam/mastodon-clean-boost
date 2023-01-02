/* This runs after a web page loads */
function handleArtile(node) {
  // Remove status info
  let status = node.querySelector(".status__info__icons");
  if (status) {
    status.parentNode.removeChild(status);
  }
  

  // Move the time information next to the name
  let time = node.querySelector(".status__relative-time");
  let displayName = node.querySelector(".display-name");
  displayName.appendChild(time)

  
  // Move prepend stuff into the info
  let prepend = node.querySelector(".status__prepend")
  if (prepend) {
    // Define a new div to contain the display-name information and status information
    let div = document.createElement("div");
    div.appendChild(prepend);
    div.appendChild(node.querySelector(".display-name"));
    let info = node.querySelector(".status__info__account")
    info.appendChild(div);
  }

  // Wrap each button in a div
  let statusBar = node.querySelector(".status__action-bar")
  if (statusBar) {
    statusBar.querySelectorAll("button").forEach((el) => {
      let div = document.createElement("div");
      el.parentNode.insertBefore(div, el);
      div.appendChild(el);
    })
  }
}

function addMutationObserver() {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          // Remove status info icons
          mutation.target.querySelectorAll("article").forEach(handleArtile);
          // Fix the margin around the status prepend
          /* mutation.target.querySelectorAll(".status__prepend").forEach((node) => {
            node.style["margin-bottom"] = 0
          }); */
        });
      });
      observer.observe(document.body, { subtree: true, childList: true });      
}

addMutationObserver()
