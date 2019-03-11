function dancehall(input){
    let halllenght = Number(input.shift());
    let hallwidth = Number(input.shift());
    let wardrobe = Number(input.shift());

    let hallarea = (halllenght*100) * (hallwidth*100);
    let wardrobearea = (wardrobe*100) * (wardrobe*100);
    let bencharea = hallarea / 10;
    let free = hallarea - wardrobearea - bencharea;
    let dancers = Math.floor(free/(40 + 7000));
    console.log(dancers);
}