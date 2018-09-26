/*jshint esversion: 6 */

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
        "&source.id=214321562187" + // Should be added as parameter ?
        "&source.url=http://www.site.com/videos/214321562187.html"; // Should be document.location.href

    }


    /**
     * Register a TB widget container
     * @param {string} container The widget container id.
     * @param {string} type The widget item type. 
     * @param {integer} count The widget max items count.
     * @param {function} template The widget item template (optional)
     */
    register(container, type, count, template) {

        // Ensure there is a default item tempate
        if(!template) template = this.buildItem;

        // The widget info
        var info = {
            container:container,
            type:type,
            count:count,
            template:template
        };
        this.containers.push(info);
    }

    /**
     * Build tb widgets
     */
    build() {
        this.containers.forEach((info) => {
            var div = document.getElementById(info.container); // O(1) time complexity
            if(div) {
                fetch(this.buildUrl(info)).then((response) => {
                    response.json().then((data) => {
                        this.buildWidget(div, data, info.template);
                    }).catch((reason) =>{
                        this.logError("Failed to parse widget '"+info.container+"' data", reason);
                    });
                }).catch((reason) => {
                    this.logError("Failed to load widget '"+info.container+"'  data", reason);
                });
            }
        });
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
     * Build the specific widget
     * @param {element} div 
     * @param {json} data 
     */
    buildWidget(div, data, template){
        var list = data.list;
        if(list) {
            var content = '';
            list.forEach((item) => {
                content += template(this.buildItemInfo(item));
            });
            div.innerHTML = content;
        } else {

        }
    }

    /**
     * Normalizes item info to hide JSON implementation
     * @param {object} item 
     */
    buildItemInfo(item) {
        return {
            url:item.url,
            thumbnail:item.thumbnail[0].url,
            name:item.name
        };
    }

    /**
     * Gets an HTML item box from item object
     * @param {object} item 
     */
    buildItem(item) {
        return  "<div class='tbitem'>" +
                    "<a href='"+item.url+"' target='_blank'>" +
                        "<div class='tbimage' style='background-image:url(\"" + item.thumbnail +"\")'>" +
                        "</div>" +
                        "<div class='tblabel'>" +
                            item.name +
                        "</div>" +
                        "</div>" +
                    "</a>" +
                "</div>";
    }

    /**
     * Log widget error
     * @param {string} message 
     * @param {string} reason 
     */
    logError(message, reason) {
        console.log("ERROR:" + message + "[reason="+reason+"]");
    }
}