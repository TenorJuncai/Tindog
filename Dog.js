// Create the Dog class here
class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getDogsHtml() {
    const { name, avatar, age, bio } = this;
    return `<div class="dog-card">
              <div class="dog-info">
                <img class="avatar" src="${avatar}" alt="dog-pics">
                <img id="like" src="./images/badge-like.png" alt="like">
                <img id="dislike" src="./images/badge-nope.png" alt="nope">
                <h2 id="dog-name-age">${name}, ${age}</h2>
                <p class="dog-bio">${bio}</p>
              </div>
            </div>
            `;
  }
}

export default Dog;
