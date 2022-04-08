type Params = {
    name: String,
    text: String,
    date: Number,
}

export function saveLocal(obj:Params) {
    localStorage.clear();
    localStorage.setItem('diw4', JSON.stringify(obj));
}

export function getLocal() {
    const item = localStorage.getItem('diw4');
    if(item) return JSON.parse(item)
}