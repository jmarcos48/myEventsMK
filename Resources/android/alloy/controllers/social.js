function Controller() {
    function openSocialWeb() {
        var args = {
            id: this.id
        };
        var detailview = Alloy.createController("socialdetail", args);
        detailview.openSocialDetailWindow($.SocialTab);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "social";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.socialWindow = Ti.UI.createWindow({
        id: "socialWindow",
        backgroundColor: "#FBC9BA",
        barColor: "black",
        layout: "vertical",
        backgroundImage: "/images/background/heart_pattern_pink.png"
    });
    $.__views.__alloyId29 = Ti.UI.createButton({
        backgroundImage: "/images/toolbar/leftNavButton.png",
        id: "__alloyId29"
    });
    $.__views.socialWindow.leftNavButton = $.__views.__alloyId29;
    var __alloyId30 = [];
    $.__views.socialnetworksTable = Ti.UI.createTableViewSection({
        id: "socialnetworksTable"
    });
    __alloyId30.push($.__views.socialnetworksTable);
    $.__views.FACEBOOK = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "FACEBOOK"
    });
    $.__views.socialnetworksTable.add($.__views.FACEBOOK);
    openSocialWeb ? $.__views.FACEBOOK.addEventListener("click", openSocialWeb) : __defers["$.__views.FACEBOOK!click!openSocialWeb"] = true;
    $.__views.__alloyId31 = Ti.UI.createImageView({
        image: "/images/social/facebook.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId31"
    });
    $.__views.FACEBOOK.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        text: "Facebook",
        id: "__alloyId32"
    });
    $.__views.FACEBOOK.add($.__views.__alloyId32);
    $.__views.TWITTER = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "TWITTER"
    });
    $.__views.socialnetworksTable.add($.__views.TWITTER);
    openSocialWeb ? $.__views.TWITTER.addEventListener("click", openSocialWeb) : __defers["$.__views.TWITTER!click!openSocialWeb"] = true;
    $.__views.__alloyId33 = Ti.UI.createImageView({
        image: "/images/social/twitter.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId33"
    });
    $.__views.TWITTER.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createLabel({
        text: "Twitter",
        id: "__alloyId34"
    });
    $.__views.TWITTER.add($.__views.__alloyId34);
    $.__views.YOUTUBE = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "YOUTUBE"
    });
    $.__views.socialnetworksTable.add($.__views.YOUTUBE);
    openSocialWeb ? $.__views.YOUTUBE.addEventListener("click", openSocialWeb) : __defers["$.__views.YOUTUBE!click!openSocialWeb"] = true;
    $.__views.__alloyId35 = Ti.UI.createImageView({
        image: "/images/social/youtube.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId35"
    });
    $.__views.YOUTUBE.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        text: "Youtube",
        id: "__alloyId36"
    });
    $.__views.YOUTUBE.add($.__views.__alloyId36);
    $.__views.INSTAGRAM = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "INSTAGRAM"
    });
    $.__views.socialnetworksTable.add($.__views.INSTAGRAM);
    openSocialWeb ? $.__views.INSTAGRAM.addEventListener("click", openSocialWeb) : __defers["$.__views.INSTAGRAM!click!openSocialWeb"] = true;
    $.__views.__alloyId37 = Ti.UI.createImageView({
        image: "/images/social/instagram.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId37"
    });
    $.__views.INSTAGRAM.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        text: "Instagram",
        id: "__alloyId38"
    });
    $.__views.INSTAGRAM.add($.__views.__alloyId38);
    $.__views.CORPORATE = Ti.UI.createTableViewRow({
        layout: "horizontal",
        hasChild: "true",
        id: "CORPORATE"
    });
    $.__views.socialnetworksTable.add($.__views.CORPORATE);
    openSocialWeb ? $.__views.CORPORATE.addEventListener("click", openSocialWeb) : __defers["$.__views.CORPORATE!click!openSocialWeb"] = true;
    $.__views.__alloyId39 = Ti.UI.createImageView({
        image: "/images/toolbar/heart_pink.png",
        width: "20",
        height: "20",
        left: "5",
        top: "5",
        bottom: "5",
        right: "5",
        id: "__alloyId39"
    });
    $.__views.CORPORATE.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        text: "Sitio Mary Kay",
        id: "__alloyId40"
    });
    $.__views.CORPORATE.add($.__views.__alloyId40);
    $.__views.socialTable = Ti.UI.createTableView({
        data: __alloyId30,
        id: "socialTable",
        borderRadius: "6",
        height: Titanium.UI.SIZE,
        borderColor: "gray",
        width: "95%",
        top: "7",
        backgroundColor: "white"
    });
    $.__views.socialWindow.add($.__views.socialTable);
    $.__views.SocialTab = Ti.UI.createTab({
        window: $.__views.socialWindow,
        id: "SocialTab",
        title: "Síguenos",
        tintColor: "#FBC9BA",
        backgroundColor: "black",
        icon: "images/toolbar/Cloud.png"
    });
    $.__views.SocialTab && $.addTopLevelView($.__views.SocialTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    {
        Titanium.UI.createLabel({
            color: "#FBC9BA",
            text: "Redes Sociales",
            font: {
                fontWeight: "bold",
                fontSize: "16"
            }
        });
    }
    __defers["$.__views.FACEBOOK!click!openSocialWeb"] && $.__views.FACEBOOK.addEventListener("click", openSocialWeb);
    __defers["$.__views.TWITTER!click!openSocialWeb"] && $.__views.TWITTER.addEventListener("click", openSocialWeb);
    __defers["$.__views.YOUTUBE!click!openSocialWeb"] && $.__views.YOUTUBE.addEventListener("click", openSocialWeb);
    __defers["$.__views.INSTAGRAM!click!openSocialWeb"] && $.__views.INSTAGRAM.addEventListener("click", openSocialWeb);
    __defers["$.__views.CORPORATE!click!openSocialWeb"] && $.__views.CORPORATE.addEventListener("click", openSocialWeb);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;