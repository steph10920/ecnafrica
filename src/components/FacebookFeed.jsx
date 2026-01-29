import React from "react";

export default function FacebookFeed() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
      <h6 className="text-sm font-semibold text-gray-800 mb-3">
        Facebook Updates
      </h6>

      <div className="w-full h-[600px] overflow-hidden rounded-lg">
        <iframe
          title="ECN Africa Facebook Feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Felimucommunitynetwork&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
          width="100%"
          height="600"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}
