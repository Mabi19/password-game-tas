export async function nextTick() {
    // This can be replaced with queueMicrotask, but I want to show all the statuses
    return new Promise<void>((res) => requestAnimationFrame(() => res()));
}

export async function loadDelay() {
    return new Promise<void>((res) => requestAnimationFrame(() => res()));
}

export async function waitForElement(selector: string, timeout: number = 600) {
    let loadTicks = 0;
    let element: HTMLElement;
    while (loadTicks < timeout) {
        // not my typo
        element = document.querySelector(selector);
        if (element != null) {
            break;
        }
        loadTicks++;
        await loadDelay();
    }
    return { loadTicks, element };
}