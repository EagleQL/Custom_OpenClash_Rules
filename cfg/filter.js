async function main(proxies) {
    return proxies?.filter((p) => p.includes('新加坡')) || null;
}
