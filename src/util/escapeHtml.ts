export function escapeHtml(str: string) {
    return str.replace(/[&'`"<>]/g, (match) => {
        return (
            {
                "&": "&amp;",
                "'": "&#x27;",
                "`": "&#x60;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;",
            }[match] || ""
        );
    });
}
