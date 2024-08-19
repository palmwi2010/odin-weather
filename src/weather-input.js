import weatherImg from "./assets/weather-schematic.jpg"

function render() {
    const $container = document.createElement("div");
    $container.className = "input-div";

    const $header = document.createElement("h1");
    $header.className = "main-header";
    $header.textContent = "Check the weather in your area!"

    $container.appendChild($header);

    const $form = document.createElement("form");
    const $formLabel = document.createElement("p");
    const $formInput = document.createElement("input");
    const $formFeedback = document.createElement("label");
    const $formSubmit = document.createElement("button");

    $formLabel.className = "form-label";
    $formLabel.textContent = "Please enter a location and hit enter!";
    
    $formInput.className = "location-form";
    $formInput.type = "text";
    $formInput.required = true;

    $formFeedback.className = "feedback";
    $formSubmit.className = "btn submit";
    $formSubmit.textContent = "Submit";

    $form.appendChild($formLabel);
    $form.appendChild($formInput);
    $form.appendChild($formFeedback);
    $form.appendChild($formSubmit);

    $container.appendChild($form);

    const $image = document.createElement("img");
    $image.className = "input-img";
    $image.alt = "Image of weather clouds";
    $image.src = weatherImg;

    //$container.appendChild($image);
    
    return $container;
}

export default render;