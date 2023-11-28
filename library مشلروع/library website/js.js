var ran1 = Math.floor(Math.random() * ((3-0)+1) + 0);
var ran2 = Math.floor(Math.random() * ((3-0)+1) + 0);
var ran3 = Math.floor(Math.random() * ((3-0)+1) + 0);

const names = ["Amani Sliman" , "Jnan Zied" , "Tiaf ibrahim" , "Amerra Salem"]
const ids = ["431001584" , "431002235" , "421007033" , "421001604"]
const imgs = ['img1.jpg' , 'img2.jpg' , 'img3.jpg' , 'img4.jpg']
const info = [
    "British author best known for writing the Harry Potter fantasy series. The books have been translated into over 80 languages, sold more than 500 million copies, become the best-selling book series in history" ,
    "American novelist who wrote To Kill a Mockingbird (1960), a Pulitzer Prize-winning novel about racial injustice in the American South. The novel was adapted into a critically acclaimed film in 1962, and Lee received the Presidential Medal of Freedom in 2007." , 
    "American author, essayist, humorist, journalist, and lecturer. He was widely regarded as the greatest humorist of the United States, and he was one of the most popular public speakers of the era." ,
    "English novelist, journalist, and social critic. He is considered one of the greatest novelists of the Victorian era, and one of the most popular writers of the English language"
]




document.getElementById("name1").innerHTML=names[ran1];
document.getElementById("name2").innerHTML=names[ran2];
document.getElementById("name3").innerHTML=names[ran3];

document.getElementById("img1").src = imgs[ran1]
document.getElementById("img2").src = imgs[ran2]
document.getElementById("img3").src = imgs[ran3]

document.getElementById("p1").innerHTML = info[ran1]
document.getElementById("p2").innerHTML = info[ran2]
document.getElementById("p3").innerHTML = info[ran3]

document.getElementById("id1").innerHTML = ids[ran1]
document.getElementById("id2").innerHTML = ids[ran2]
document.getElementById("id3").innerHTML = ids[ran3]