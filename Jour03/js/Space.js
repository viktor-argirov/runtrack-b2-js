class Space {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }


    get htmlSpace(){
        return document.getElementById(this.id);
    }

    /**
     * Checks to see if a player owns this space and returns the owner
     * @return {null || object} null if there is no token associated with the space, else return the owner object
     */

    get owner(){
        if (this.token === null) {
            return null
        } else {
            return this.token.owner.name;
        }
    }

    
    renderHTMLSpace(){
        const space = document.createElement('li');
        space.setAttribute("class", "box");
        space.setAttribute("id", this.id);
        document.querySelector("ul.boxes").appendChild(space);
    }

    /**
     * Mark the space object as occupied
     * @param {object} token - token that was dropped in this space
     */

    mark(token){
        this.token = token;
    }

}