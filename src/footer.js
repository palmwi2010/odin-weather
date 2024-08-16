function render() {
    const $container = document.createElement("div");
    $container.className = "footer";
    const $footerLabel = document.createElement("p");
    $footerLabel.textContent = "\u00A9 palmwi2010 as part of the Odin Project"; 
    $container.appendChild($footerLabel);
    return $container;
}

export default render;