import {ReactComponent as _1B} from '../../resources/cards/1B.svg'
import {ReactComponent as _2B} from '../../resources/cards/2B.svg'

import {ReactComponent as _2C} from '../../resources/cards/2C.svg'
import {ReactComponent as _3C} from '../../resources/cards/3C.svg'
import {ReactComponent as _4C} from '../../resources/cards/4C.svg'
import {ReactComponent as _5C} from '../../resources/cards/5C.svg'
import {ReactComponent as _6C} from '../../resources/cards/6C.svg'
import {ReactComponent as _7C} from '../../resources/cards/7C.svg'
import {ReactComponent as _8C} from '../../resources/cards/8C.svg'
import {ReactComponent as _9C} from '../../resources/cards/9C.svg'
import {ReactComponent as _10C} from '../../resources/cards/10C.svg'
import {ReactComponent as _11C} from '../../resources/cards/11C.svg'
import {ReactComponent as _12C} from '../../resources/cards/12C.svg'
import {ReactComponent as _13C} from '../../resources/cards/13C.svg'
import {ReactComponent as _14C} from '../../resources/cards/14C.svg'

import {ReactComponent as _2D} from '../../resources/cards/2D.svg'
import {ReactComponent as _3D} from '../../resources/cards/3D.svg'
import {ReactComponent as _4D} from '../../resources/cards/4D.svg'
import {ReactComponent as _5D} from '../../resources/cards/5D.svg'
import {ReactComponent as _6D} from '../../resources/cards/6D.svg'
import {ReactComponent as _7D} from '../../resources/cards/7D.svg'
import {ReactComponent as _8D} from '../../resources/cards/8D.svg'
import {ReactComponent as _9D} from '../../resources/cards/9D.svg'
import {ReactComponent as _10D} from '../../resources/cards/10D.svg'
import {ReactComponent as _11D} from '../../resources/cards/11D.svg'
import {ReactComponent as _12D} from '../../resources/cards/12D.svg'
import {ReactComponent as _13D} from '../../resources/cards/13D.svg'
import {ReactComponent as _14D} from '../../resources/cards/14D.svg'

import {ReactComponent as _2H} from '../../resources/cards/2H.svg'
import {ReactComponent as _3H} from '../../resources/cards/3H.svg'
import {ReactComponent as _4H} from '../../resources/cards/4H.svg'
import {ReactComponent as _5H} from '../../resources/cards/5H.svg'
import {ReactComponent as _6H} from '../../resources/cards/6H.svg'
import {ReactComponent as _7H} from '../../resources/cards/7H.svg'
import {ReactComponent as _8H} from '../../resources/cards/8H.svg'
import {ReactComponent as _9H} from '../../resources/cards/9H.svg'
import {ReactComponent as _10H} from '../../resources/cards/10H.svg'
import {ReactComponent as _11H} from '../../resources/cards/11H.svg'
import {ReactComponent as _12H} from '../../resources/cards/12H.svg'
import {ReactComponent as _13H} from '../../resources/cards/13H.svg'
import {ReactComponent as _14H} from '../../resources/cards/14H.svg'

import {ReactComponent as _2S} from '../../resources/cards/2S.svg'
import {ReactComponent as _3S} from '../../resources/cards/3S.svg'
import {ReactComponent as _4S} from '../../resources/cards/4S.svg'
import {ReactComponent as _5S} from '../../resources/cards/5S.svg'
import {ReactComponent as _6S} from '../../resources/cards/6S.svg'
import {ReactComponent as _7S} from '../../resources/cards/7S.svg'
import {ReactComponent as _8S} from '../../resources/cards/8S.svg'
import {ReactComponent as _9S} from '../../resources/cards/9S.svg'
import {ReactComponent as _10S} from '../../resources/cards/10S.svg'
import {ReactComponent as _11S} from '../../resources/cards/11S.svg'
import {ReactComponent as _12S} from '../../resources/cards/12S.svg'
import {ReactComponent as _13S} from '../../resources/cards/13S.svg'
import {ReactComponent as _14S} from '../../resources/cards/14S.svg'

import {heightCard, widthCard} from "../../utils/constants";

const CardView = (props) => {
    const components = {
        _1B: _1B,
        _2B: _2B,

        _2C: _2C,
        _3C: _3C,
        _4C: _4C,
        _5C: _5C,
        _6C: _6C,
        _7C: _7C,
        _8C: _8C,
        _9C: _9C,
        _10C: _10C,
        _11C: _11C,
        _12C: _12C,
        _13C: _13C,
        _14C: _14C,

        _2D: _2D,
        _3D: _3D,
        _4D: _4D,
        _5D: _5D,
        _6D: _6D,
        _7D: _7D,
        _8D: _8D,
        _9D: _9D,
        _10D: _10D,
        _11D: _11D,
        _12D: _12D,
        _13D: _13D,
        _14D: _14D,

        _2H: _2H,
        _3H: _3H,
        _4H: _4H,
        _5H: _5H,
        _6H: _6H,
        _7H: _7H,
        _8H: _8H,
        _9H: _9H,
        _10H: _10H,
        _11H: _11H,
        _12H: _12H,
        _13H: _13H,
        _14H: _14H,

        _2S: _2S,
        _3S: _3S,
        _4S: _4S,
        _5S: _5S,
        _6S: _6S,
        _7S: _7S,
        _8S: _8S,
        _9S: _9S,
        _10S: _10S,
        _11S: _11S,
        _12S: _12S,
        _13S: _13S,
        _14S: _14S
    };

    const TagName = components[props.id];
   // console.log("TAG " + TagName + " " + props.id)
    return <TagName width={widthCard} height={heightCard}></TagName>
}
export default CardView;
