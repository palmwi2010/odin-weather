function render() {
    const $container = document.createElement("div");
    $container.className = "nav-banner";
    const $logo = document.createElement("p");
    $logo.id = "logo";
    $logo.textContent = "Weathify"
    $container.appendChild($logo);

    return $container;
}

export default render;