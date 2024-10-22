class Post {
    constructor(author, content) {
        this.author = author;
        this.content = content;
        this.likers = [];
    }
    like(user) {
        const liked = this.likers.includes(user);
        if (!liked) {
            this.likers.push(user);
        }
    }
    likes() {
        const likersCount = this.likers.length;
        switch(likersCount) {
        case 0:
            return "No one likes this";
        case 1:
            return `${this.likers[0]} likes this`;
        case 2:
            return `${this.likers[0]} and ${this.likers[1]} like this`;
        case 3:
            return `${this.likers[0]}, ${this.likers[1]} and ${this.likers[2]} like this`;
        default:
            return `${this.likers[0]}, ${this.likers[1]} and ${likersCount - 2} others like this`;
        }
    }
}

const bdayPost = new Post("Niina", "HAPPY BIRTHDAY TO ME");
console.log(bdayPost.likes());
bdayPost.like("Maria");
console.log(bdayPost.likes());
bdayPost.like("Minna");
console.log(bdayPost.likes());
bdayPost.like("Marjatta");
console.log(bdayPost.likes());
bdayPost.like("Mikael");
console.log(bdayPost.likes());
bdayPost.like("Mette");
console.log(bdayPost.likes());
bdayPost.like("Miina");
console.log(bdayPost.likes());

