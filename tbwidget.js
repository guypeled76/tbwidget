
/**
 * Provides support for integrating tb widgets 
 */
class TBWidget {

    /**
     * Initialize the widget integration manager
     * @param {*} publisherid 
     * @param {*} apptype 
     * @param {*} apikey 
     */
    constructor(publisherid, apptype, apikey) {
        this.containers = [];
        this.url = "http://api.taboola.com/1.0/json/" + publisherid + "/recommendations.get?" +
        "app.type=" +  apptype +
        "&app.apikey=" + apikey +
        "&source.id=214321562187" +
        "&source.url=http://www.site.com/videos/214321562187.html";

    }


    /**
     * Register a TB widget container
     * @param {string} container 
     * @param {string} type 
     * @param {integer} count 
     */
    register(container, type, count) {
        var info = {
            container:container,
            type:type,
            count:count
        };
        this.containers.push(info);
    }

    /**
     * Builds url for current container
     * @param info 
     */
    buildUrl(info) {
        return this.url + 
            "&count=" + info.count +
            "&source.type=" + info.type;
    }

    /**
     * Build tb widgets
     */
    build() {
        this.containers.forEach((info) => {
            var div = document.getElementById(info.container);
            if(div) {
                fetch(this.buildUrl(info)).then((response) => {
                    response.json().then((data) => {
                        this.buildWidget(div, data);
                    }).catch((reason) =>{
                        alert(reason);
                    });
                }).catch((reason) => {
                    alert(reason);
                });
            }
        });
    }

    /**
     * Build the specific widget
     * @param {element} div 
     * @param {json} data 
     */
    buildWidget(div, data){
        var list = data.list;
        if(list) {
            var content = '';
            list.forEach((item) => {
                var itemcontent = "<div class='tbitem'>";
                itemcontent += "<a href='"+item.url+"' target='_blank'>";
                itemcontent += "<div class='tbimage' style='background-image:url(\"" + item.thumbnail[0].url +"\")'>";
                itemcontent += "</div>";
                itemcontent += "<div class='tblabel'>";
                itemcontent += item.name;
                itemcontent += "</div>";
                itemcontent += "</div>";
                itemcontent += "</a>";
                itemcontent += "</div>";

                content += itemcontent;
            });
            div.innerHTML = content;
        } else {

        }
    }
}