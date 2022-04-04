const serchVideo = async () => {
    try {

        let srch = document.getElementById("serch_bar").value;
        let result = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${srch}&key=AIzaSyDipxtxecKRoIunfMh9nMpkcXsWu-pAD4M&maxResults=28&chart=mostPopular`);
        let data = await result.json()
        let data2 = data.items
        appendVideos(data2)


    } catch (error) {
        console.log("err", error);
    }
}

const appendVideos = (data2) => {
    document.querySelector(".container").innerHTML = ""
    data2.forEach((elem) => {
        let div = document.createElement("div")
        div.className = "video"

        let div1 = document.createElement("div")
        div1.className = "content"

        let div2 = document.createElement("div")

        let imge = document.createElement("img")
        imge.src = elem.snippet.thumbnails.high.url;
        imge.className = "channel-icon"

        let title = document.createElement("h4")
        title.innerText = elem.snippet.title;
        title.className = "title"

        let p = document.createElement("p")
        p.innerText = elem.snippet.channelTitle;
        p.className = "channel-name"

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${elem.id.videoId}`
        iframe.className = "thumbnail"
        iframe.allow = "fullscreen"

        div.append(iframe)
        div1.append(imge)
        div2.append(title, p)

        div.append(div1)
        div1.append(div2)

        document.querySelector(".container").append(div);
    })
}

// -------------------------------------------------------------------------------------------

const trendingVideos = async () => {
     
    try {

        let result = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=28&chart=mostPopular&regionCode=IN&key=AIzaSyDipxtxecKRoIunfMh9nMpkcXsWu-pAD4M`);
        let data = await result.json()
        let data2 = data.items
        console.log(data)
        trandVideos(data2)
        


    } catch (error) {
        console.log("err", error);
    }
}

const trandVideos = (data2) => {
    document.querySelector(".container").innerHTML = ""
    data2.forEach((elem) => {
        let div = document.createElement("div")
        div.className = "video"

        let div1 = document.createElement("div")
        div1.className = "content"

        let div2 = document.createElement("div")

        let imge = document.createElement("img")
        imge.src = elem.snippet.thumbnails.high.url;
        imge.className = "channel-icon"

        let title = document.createElement("h4")
        title.innerText = elem.snippet.title;
        title.className = "title"

        let p = document.createElement("p")
        p.innerText = elem.snippet.channelTitle;
        p.className = "channel-name"

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${elem.id}`
        iframe.className = "thumbnail"
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
         

        div.append(iframe)
        div1.append(imge)
        div2.append(title, p)

        div.append(div1)
        div1.append(div2)

        document.querySelector(".container").append(div);
    })
}
trendingVideos();