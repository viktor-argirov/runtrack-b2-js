function myChangeBackgroundColor() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1337) {
        document.documentElement.style.backgroundColor = '#ffb703';
    } else if (screenWidth >= 1336 && screenWidth <= 505) {
        document.documentElement.style.backgroundColor = '#d90429';
    } else if (screenWidth <= 504) {
        document.documentElement.style.backgroundColor = '#003049';
    }
}

myChangeBackgroundColor();
