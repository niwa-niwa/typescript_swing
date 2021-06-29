var heel = {
    size: 16,
    color: "white",
    show: function () {
        return this.size;
    }
};
function func(values) {
    return values;
}
console.log(heel.show());
console.log(func({ size: 20, color: 'black' }));
