import * as NFTAssets from "./images/nft-prevew-card-assets"
import style from "./styles/nft-preview-card.module.css"


function NFTPreviewCard() {
    return (
        <div className={style.page}>
            <article className={style.container}>
                <a className={style.imageContainer} href="#">
                    <img
                        className={style.artwork}
                        src={NFTAssets.ImageEquilibrium}
                        alt="Equilibrium cube artwork"
                    />
                    <span className={style.viewOverlay}>
                        <img src={NFTAssets.IconView} alt="" />
                    </span>
                </a>

                <div className={style.infoContainer}>
                    <a className={style.title} href="#">Equilibrium #3429</a>
                    <p className={style.description}>
                        Our Equilibrium collection promotes balance and calm.
                    </p>

                    <div className={style.stats}>
                        <p className={style.price}>
                            <img src={NFTAssets.IconEtherium} alt="" />
                            <span>0.041 ETH</span>
                        </p>
                        <p className={style.time}>
                            <img src={NFTAssets.IconClock} alt="" />
                            <span>3 days left</span>
                        </p>
                    </div>

                    <div className={style.author}>
                        <img
                            className={style.avatar}
                            src={NFTAssets.ImageAvatar}
                            alt="Jules Wyvern"
                        />
                        <p>Creation of <a href="#">Jules Wyvern</a></p>
                    </div>
                </div>
            </article>
        </div>
    )
}


export default NFTPreviewCard
