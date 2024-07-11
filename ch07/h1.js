// 定義Pet基類
class Pet {
    constructor(nickname, age, color) {
      this.nickname = nickname;
      this.age = age;
      this.color = color;
    }
  
    // talk方法留空
    talk() {
      // 留空
    }
  }
  
  // 定義Dog子類，繼承自Pet
  class Dog extends Pet {
    constructor(nickname, age, color) {
      super(nickname, age, color);
    }
  
    // 覆寫talk方法
    talk() {
      console.log("汪汪！");
    }
  }
  
  // 定義Cat子類，繼承自Pet
  class Cat extends Pet {
    constructor(nickname, age, color) {
      super(nickname, age, color);
    }
  
    // 覆寫talk方法
    talk() {
      console.log("喵喵！");
    }
  }
  
  // 定義Bird子類，繼承自Pet
  class Bird extends Pet {
    constructor(nickname, age, color) {
      super(nickname, age, color);
    }
  
    // 覆寫talk方法
    talk() {
      console.log("啾啾！");
    }
  }
  
  // 創建實例並測試
  const myDog = new Dog('旺財', 5, '黑色');
  myDog.talk(); // 應該印出 "汪汪！"
  
  const myCat = new Cat('咪咪', 3, '白色');
  myCat.talk(); // 應該印出 "喵喵！"
  
  const myBird = new Bird('小鳥', 1, '黃色');
  myBird.talk(); // 應該印出 "啾啾！"