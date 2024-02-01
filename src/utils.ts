/// Function to make a link look nices, strips https://, etc.
export function link_simplified(full_link: string): string {
    if (!full_link) { return ""; }
    var res = full_link;
    if (res.startsWith('https://')) { res = res.substring('https://'.length); }
    if (res.startsWith('http://')) { res = res.substring('http://'.length); }
    if (res.endsWith('/')) { res = res.substring(0, res.length - 1); }
    return res;
}
