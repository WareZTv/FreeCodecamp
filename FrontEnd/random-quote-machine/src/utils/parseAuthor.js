    export const getAuthorName = author => {
        return author.match(/(.+)\(/s)[1].trim().split(" ").join("");
    }

    export const getAnimeName = author => {
        return author.match(/\((.+)\)/s)[1].trim().split(" ").join("");
    }