import * as React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function     MyBreadcrumbs() {
  const { pathname } = useLocation();
  const urls = pathname?.split("/").filter(Boolean);



//   const breadcrumbsNames = {
//     "outbound-sms": "Outbound - SMS ",
//     campaigns: " Campaigns ",
//     "create-campaign": " Create Campaign ",
//     templates: " Templates ",
//     "status-reports": " Status Report ",
//     addtemplate: " Add Template ",
//     "sender-id": "Sender ID",
//     "create-senderId": "Create Sender Id ",
//   };

  return (
    <div>
      {urls?.map((url, index) => (
        <span key={index}>
          <Link
            style={{
              color: index === urls.length - 1 ? "#000000D9" : "#000000A6",
            }}
            to={`/${urls.slice(0, index + 1).join("/")}`}
          >
            {url}
          </Link>
          {index < urls.length - 1 && <span>/</span>}
        </span>
      ))}
    </div>
  );
}
