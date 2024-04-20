import React,{useEffect} from "react";
import { Helmet } from "react-helmet";

function Createtitlepages(name){
    return function Titlepages(){
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{name}</title>
                <meta property="og:title" content={name}/>
                <meta content="arsindo, peroperty, perumahan, developer, subsidi" name="keywords" />
                <meta content="arsindo, peroperty, perumahan, developer, subsidi" property="og:keywords" />
                <meta content="Arsindo Propherthy Land merupakan perusahaan pengembang terbaik dan terpecaya yang berlokasi di boyolali, jawa tengah" property="og:description" />
                <meta content="Arsindo Propherthy Land merupakan perusahaan pengembang terbaik dan terpecaya yang berlokasi di boyolali, jawa tengah" name="description" />
            </Helmet>
        </div>
    }

    return null
};

export default Createtitlepages;