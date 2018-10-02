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

        // Ensure there is a default item template
        if(!template) template = this.buildItem;

        // The widget info
        var info = {
            container:container,
            type:type,
            count:count,
            template:template
        };

        this.containers.push(info);

        // Enable users to react to changes in widget
        return new Promise(function(resolved, rejected) {
            info.resolved = resolved;
            info.rejected = rejected;
        });
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
                        this.buildWidget(div, data, info.template, info.resolved);
                    }).catch((reason) =>{
                        this.logError("Failed to parse widget '"+info.container+"' data", reason, info.rejected);
                    });
                }).catch((reason) => {
                    this.logError("Failed to load widget '"+info.container+"'  data", reason, info.rejected);
                });
            }
            else {
                this.logError("Failed to find widget container element '"+info.container+"'", reason, info.rejected);
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
    buildWidget(div, data, template, resolved){
        var list = data.list;
        if(list) {
            var content = '';
            list.forEach((item) => {
                content += template(this.buildItemInfo(item));
            });
            div.innerHTML = content;

            // If we need to resolve the widget promise
            if(resolved) resolved(div);
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
            name:item.name,
            branding:item.branding
        };
    }

    /**
     * Gets an HTML item box from item object
     * @param {object} item 
     */
    buildItem(item) {
        return  "<div class='tb-item'>" +
                    "<a href='"+item.url+"' target='_blank'>" +
                        "<div class='tb-item-image' style='background-image:url(\"" + item.thumbnail +"\")'>" +
                        "</div>" +
                        "<div class='tb-item-label'>" +
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
    logError(message, reason, rejected) {
        var text = "ERROR:" + message + "[reason="+reason+"]";
        console.log(text);
        if(rejected) rejected(text);
    }
}