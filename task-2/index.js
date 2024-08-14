class ToastNotification {
  // initializes a container for the toast messages
  constructor() {
    this.createContainer();
  }

  createContainer() {
    // creates div element to hold toast messages and appends it to the body
    this.container = document.createElement("div");
    this.container.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
    `;
    document.body.appendChild(this.container);
  }

  show(message, type, duration = 3000) {
    // creates a div element to show inidividual toasts and sets the message
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
      margin-bottom: 10px;
      padding: 20px;
      border-radius: 4px;
      color: white;
      font-family: Arial;
      font-size: 14px;
    `;

    // sets the background color depending on the type of toast
    switch (type) {
      case "success":
        toast.style.backgroundColor = "#008000";
        break;
      case "warning":
        toast.style.backgroundColor = "#FFA500";
        break;
      case "error":
        toast.style.backgroundColor = "#FF0000";
        break;
    }

    // append the toast message to the container
    this.container.appendChild(toast);
    toast.style.opacity = "1";

    // removes the toast message after a specified duration
    setTimeout(() => {
      toast.style.opacity = "0";
      this.container.removeChild(toast);
    }, duration);
  }
}

const toast = new ToastNotification();

document.getElementById("success").addEventListener("click", () => {
  toast.show("Success!", "success");
});

document.getElementById("warning").addEventListener("click", () => {
  toast.show("Warning!", "warning");
});

document.getElementById("error").addEventListener("click", () => {
  toast.show("Error!", "error");
});
