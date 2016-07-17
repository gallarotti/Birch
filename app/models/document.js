"use strict";

/**
 * Represents a single document in the
 * Birch system
 */
class Document {
    constructor() {
        this.title = "";
        this.slug = "";
        this.path = "";
        this.searchID = "";
        this.markdown = "";
        this.html = "";
        this.updateDate = null;
        this.createDate = null;
        this.tags = [];
    }

    getLink() {
        var link = this.slug;
        if(this.path && this.path.length>0) {
            link = this.path + "/" + this.slug;
        }
        return link;
    }
}

module.exports = Document;