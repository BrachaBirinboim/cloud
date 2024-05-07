//#region IMPORT
import { useDispatch, useSelector } from "react-redux"
// import { useId } from "react";
//#region brushes
import Large_softening_brush from "../pictures/brushes/eyes/Large_softening_brush.jpg"
import regular_brush from "../pictures/brushes/eyes/regular_brush.jpg"
import  Smoky_makeup_brush  from "../pictures/brushes/eyes/Smoky_makeup_brush.jpg"
import  Aura_brush   from "../pictures/brushes/face/Aura_brush.jpg"
import  Blush_Brush   from "../pictures/brushes/face/Blush_Brush.jpg"
import  Concealer_brush   from "../pictures/brushes/face/Concealer_brush.jpg"
import  diamond_brush   from "../pictures/brushes/face/diamond_brush.jpg"
import  lipstick_brush  from "../pictures/brushes/lips/lipstick_brush.jpg"
//#endregion
//#region eyes
import  Eyebrow_pencil   from "../pictures/eyes/Eyebrows/Eyebrow_pencil.jpg"
import  Eyebrow_scissors   from "../pictures/eyes/Eyebrows/Eyebrow_scissors.jpg"
import  Pigment_eyeshadow   from "../pictures/eyes/Eyebrows/Pigment_eyeshadow.jpg"
import  tweezers   from "../pictures/eyes/Eyebrows/tweezers.jpg"
import  Gel_eyeliner   from "../pictures/eyes/Eyeliner/Gel_eyeliner.jpg"
import  Eyeliner_cake   from "../pictures/eyes/Eyeliner/Eyeliner_cake.jpg"
import  Liquid_eyeliner   from "../pictures/eyes/Eyeliner/Liquid_eyeliner.jpg"
import  palette_eyeliner   from "../pictures/eyes/Eyeliner/palette_eyeliner.jpg"
import  AOP_eyeshadow_palette   from "../pictures/eyes/eyeshadow/AOP_eyeshadow_palette.jpg"
import  BL_eyeshadow_palette   from "../pictures/eyes/eyeshadow/BL_eyeshadow_palette.jpg"
import  Eyeshadow_background   from "../pictures/eyes/eyeshadow/Eyeshadow_background.jpg"
import  eyeshadow_pigment_eyebrows   from "../pictures/eyes/eyeshadow/eyeshadow_pigment_eyebrows.jpg"
import  wet_shadow   from "../pictures/eyes/eyeshadow/wet_shadow.jpg"
import  מסקרה_ווליום   from "../pictures/eyes/mascara/מסקרה_ווליום.jpg"
import  Durable_pencil   from "../pictures/eyes/pencils/Durable_pencil.jpg"
import  Eye_Pencil   from "../pictures/eyes/pencils/Eye_Pencil.jpg"
import  Metallic_pencil   from "../pictures/eyes/pencils/Metallic_pencil.jpg"
//#endregion
//#region face
import  NC_nourishing_concealer   from "../pictures/face/Concealer/NC_nourishing_concealer.jpg"
import  קונסילר_נוזלי   from "../pictures/face/Concealer/קונסילר_נוזלי.jpg"
// import  שימר from "../pictures/face/Shimmer/שימר.jpg"
import  שימר_נוזלי_CS   from "../pictures/face/Shimmer/שימר_נוזלי_CS.jpg"
import  מייקאפ_פודרה_FP   from "../pictures/face/powder/מייקאפ_פודרה_FP.jpg"
import  פודרה_HD   from "../pictures/face/powder/פודרה_HD.jpg"
import  פודרה_אבקה_שקופ_LP03   from "../pictures/face/powder/פודרה_אבקה_שקופ_LP03.jpg"
import  primer   from "../pictures/face/creams/primer.jpg"
import  Moisturizer   from "../pictures/face/creams/Moisturizer.jpg"
import  makeup_remover   from "../pictures/face/creams/makeup_remover.jpg"
import  BL_contour_blush   from "../pictures/face/blushes/BL_contour_blush.jpg"
import  Matte_blush_CP03   from "../pictures/face/blushes/Matte_blush_CP03.jpg"
import  Matte_blush_in_BL_shades   from "../pictures/face/blushes/Matte_blush_in_BL_shades.jpg"
import  Powder_Moon_BM   from "../pictures/face/blushes/Powder_Moon_BM.jpg"
//#endregion
//#region lips
import  גלוס_לק_GL  from "../pictures/שפתיים/שפתונים/גלוס_לק_GL.jpg"
import  גלוס_קריסטלי_GC  from "../pictures/שפתיים/שפתונים/גלוס_קריסטלי_GC.jpg"
import  גלוס_רב_מימדי  from "../pictures/שפתיים/שפתונים/גלוס_רב_מימדי.jpg"
import  ליפקליק  from "../pictures/שפתיים/שפתונים/ליפקליק.jpg"
import  עיפרון_שפתיים  from "../pictures/שפתיים/שפתונים/עיפרון_שפתיים.jpg"
import  פלטת_שפתונים  from "../pictures/שפתיים/שפתונים/פלטת_שפתונים.jpg"
import  שפתון_מאט  from "../pictures/שפתיים/שפתונים/שפתון_מאט.jpg"
import  שפתון_נוזלי_עמיד  from "../pictures/שפתיים/שפתונים/שפתון_נוזלי_עמיד.jpg"
//#endregion
//#endregion
// const id=useId();
//#region MakeupState

const MakeupState = [{  id:"1", name: " ליפקליק", price:99, qty:30, image:ליפקליק ,
description: "סדרת שפתונים חדשה בעלת פורמולה ייחודית עם אפקט של קרם לחות.",qtyInTheCard:0},
{  id:"2", name: " שפתון מאט LIM", price: 110, qty:35, image:שפתון_מאט,
description: "שפתון נוזלי מיוחד במראה מאט המשיג שכיבה אחידה וגימור קטיפתי.",qtyInTheCard:0}
, {  id:"3", name: "שפתון נוזלי עמיד", price: 60, qty:15, image:שפתון_נוזלי_עמיד,
description: "פורמולה בפיתוח ייחודי המאפשר גימור מט חזק, מתייבשת במהירות על השפתיים ובעלת דגש על עמידות לאורך זמן.",qtyInTheCard:0},
{  id:"4", name: "גלוס רב מימדי", price: 29.9, qty:70, image:גלוס_רב_מימדי,
description: "ליפגלוס נוצץ המתאפיין במרקם ג’ל ובגימור צבעי הקשת הודות לנוכחות פנינים וקריסטלים המעבירים אור במשחק קסום של צבעים.",qtyInTheCard:0},
{  id:"5", name: "עיפרון שפתיים", price: 110, qty:15, image:עיפרון_שפתיים,
description: "עפרונות בעלי גוונים עשירים ועמידים במיוחד המעניקים כיסוי מלא לשפתיים. העפרונות מתאפיינים ברכות מושלמת ומתאימים במיוחד לאמני האיפור.",qtyInTheCard:0},
{  id:"6", name: "פלטת שפתונים", price: 290, qty:20, image:פלטת_שפתונים,
description: "ליפגלוס נוצץ המתאפיין במרקם ג’ל ובגימור צבעי הקשת הודות לנוכחות פנינים וקריסטלים המעבירים אור במשחק קסום של צבעים.",qtyInTheCard:0},
{  id:"7", name: "גלוס קריסטלי GC", price: 110, qty:15, image:גלוס_קריסטלי_GC,
description: "הפורמולה מאופיינת בקריסטלים שקופים מיוחדים.",qtyInTheCard:0},
{  id:"8", name: "גלוס לק GL", price: 110, qty:25, image:גלוס_לק_GL,
description: "ליפגלוס במראה מבריק במיוחד, בעל ניחוח עדין המופק מחלב אורז.",qtyInTheCard:0},
{  id:"111", name: "עיפרון לגבות", price: 79,qty:30, image:Eyebrow_pencil,
description: "נוסחה ייחודית עמידה לאורך זמן. עשירה בפיגמנטים במרקם גיר אבן המתאימה למילוי, עיבוי ועיצוב הגבות.",qtyInTheCard:0},
{  id:"112", name: "מספריים לגבות", price: 110, qty:35, image:Eyebrow_scissors,
description: ""},
{  id:"113", name: "צללית פיגמנט", price: 100, qty:15, image:Pigment_eyeshadow,
description: "צללית חלקה, נמשחת בקלות בעזרת מברשת למראה גבה מודגש ועמיד לאורך זמן.",qtyInTheCard:0},
{  id:"114", name: "פינצטה", price: 75, qty:45, image:tweezers,
description: ""},
{  id:"121", name: "איילינר קייק", price: 100,qty:30, image:Eyeliner_cake,
description: "אייליינר קייק מעניק מראה עשיר ומעוצב בעזרת צבע חזק ואטום.",qtyInTheCard:0},
{  id:"122", name: "איילינר ג'ל", price: 110, qty:35, image:Gel_eyeliner,
description: "הפורמולה המחודשת של האיליינר ג’ל הינה פורמולה חלקה במיוחד. בהנחה אחת קלה ופשוטה ניתן למרוח קו איליינר מדויק, אטום ועמיד במים.",qtyInTheCard:0},
{  id:"123", name: "איילינר נוזלי", price: 110, qty:15, image:Liquid_eyeliner,
description: "איליינר נוזלי בעל מברשת דקה הגולשת בצורה חלקה ומציעה דיוק יוצא דופן של קו איליינר מדויק, אטום ושחור במיוחד.",qtyInTheCard:0},
{  id:"124", name: "פלטת איילינר", price: 279, qty:15, image:palette_eyeliner,
description: "פלטת אייליינר קייק המשלבת חמישה גוונים המעניק מראה עשיר ומעוצב בעזרת צבע חזק ומבריק.",qtyInTheCard:0},
{  id:"131", name: "פלטת צלליות משי AOP", price: 219, qty:30,image:AOP_eyeshadow_palette,
description: "פלטה המכילה חמישה גוונים קרמיים וקטיפתיים של צלליות חלקות, ססגוניות ומטאליות לגימור עשיר ומבריק.",qtyInTheCard:0},
{  id:"132", name: "פלטת צלליות BL", price: 219, qty:35, image:BL_eyeshadow_palette,
description: "פלטה של צלליות עיניים דחוסות, המכילה חמישה גוונים באפקט מאט או מבריק.",qtyInTheCard:0}
, {  id:"133", name: "צללית רקע", price:110, qty:15, image:Eyeshadow_background,
description: "שלישיית צלליות בעלות גוונים עמוקים ומנצנצים המבטיחים כיסוי מלא ומעניקים הצללה מושלמת-להרגשה נעימה על העור.",qtyInTheCard:0},
{  id:"134", name: " צללית פיגמנט לגבות", price: 100, qty:12, image:eyeshadow_pigment_eyebrows,
description: "צללית חלקה, נמשחת בקלות בעזרת מברשת למראה גבה מודגש ועמיד לאורך זמן.",qtyInTheCard:0},
{  id:"135", name: "צללית רטובה", price: 100, qty:12, image:wet_shadow,
description: "שלישיית צלליות חדשות בגוון קרמי קטיפתי ומטאלי במיוחד אשר ניתנות להנחה בעזרת מברשת רטובה להעצמת המטאליות.",qtyInTheCard:0},
{  id:"141", name: "מסקרה ווליום", price: 110,qty:30, image:מסקרה_ווליום,
description: "מסקרה אחת המאפשרת 3 פעולות. לריסים עבים ומעוגלים ולהשגת המראה הנשי האולטימטיבי.",qtyInTheCard:0},
{  id:"151", name: "עיפרון עמיד", price:79, qty:35, image:Durable_pencil,
description: "עיפרון עיניים שחור מסדרת הקז’אל בעל מרקם קרמי העשוי בטכנולוגיה חדשנית המחליקה על העפעף ללא מאמץ, רך במיוחד, היוצר הדגשה מדויקת במריחה אחת, לשרטוט קל ותיחום מדויק של העין. "},
{  id:"152", name: "עיפרון עיניים", price:69, qty:25, image: Eye_Pencil,
description: "נוסחה חדשנית המאפשרת שרטוט עשיר, רך וחלק, בעל כיסוי מושלם בקו אחד.",qtyInTheCard:0},
{  id:"153", name: "עיפרון מטאלי", price: 29.9, qty:79, image:Metallic_pencil,
description: "סדרת עפרונות בגוונים מטאליים להנחה קלה ופשוטה בעל כיסוי גבוה בגוון מטאלי במיוחד.",qtyInTheCard:0},
{  id:"211", name: "מברשת הנחה גדולה", price: 90,qty:45, image:regular_brush,
description: "סדרת מברשות איפור מקצועיות בעלות אחיזה נוחה, המאפשרות דיוק ושליטה.",qtyInTheCard:0},
{  id:"212", name: "מברשת מעושנת קטנה", price:85, qty:35, image:Smoky_makeup_brush,
description: "הסדרה מורכבת ממברשות שיער טבעי ברמה גבוהה ומברשות סיליקון, בעלות דרגת קשיות גבוהה - הגורמות לצלליות להיצמד בצורה טובה יותר לעור.",qtyInTheCard:0}
, {  id:"213", name: "מברשת ריכוך גדולה", price:90, qty:15, image:Large_softening_brush,
description: " ידיות המברשות וקו המתאר של השערות, תוכננו בקפידה ובדיוק מירבי. "+
"המשקל והמרקם של חומרים שונים נלקחו בחשבון לפי המטרה לה מיועדת כל מברשת,"+
"על מנת להגיע למראה איפור מושלם.",qtyInTheCard:0},
{  id:"221", name: "מברשת הילה", price: 100,qty:20, image:Aura_brush,
description: "סדרת מברשות איפור מקצועיות בעלות אחיזה נוחה, המאפשרות דיוק ושליטה."+
"הסדרה מורכבת ממברשות שיער טבעי ברמה גבוהה ומברשות סיליקון",qtyInTheCard:0},
{  id:"222", name: "מברשת סומק", price: 200, qty:35, image:Blush_Brush,
description: "המברשות עמידות וניתנות לשימוש לאורך שנים רבות באמצעות שטיפה וניקוי נכון.",qtyInTheCard:0}
, {  id:"223", name: "מברשת קונסילר", price: 109, qty:39, image:Concealer_brush,
description: "סדרת מברשות איפור מקצועיות בעלות אחיזה נוחה, המאפשרות דיוק ושליטה."+
"הסדרה מורכבת ממברשות שיער טבעי ברמה גבוהה ומברשות סיליקון",qtyInTheCard:0},
{  id:"224", name: "מברשת יהלום", price:70, qty:70, image:diamond_brush,
description: "",qtyInTheCard:0},
{  id:"231", name: "מברשת ליפסטיק", price: 80,qty:30, image:lipstick_brush,
description: "סדרת מברשות איפור מקצועיות בעלות אחיזה נוחה, המאפשרות דיוק ושליטה.",qtyInTheCard:0},
{  id:"311", name: "סומק קונטור BL", price:170, qty:35, image:BL_contour_blush,
description: "פורמולת סומק הקונטור הינה בעלת מרקם משי חלק ודקיק במיוחד. מספקת כיסוי גבוה בהנחה קלה ופשוטה.",qtyInTheCard:0}
, {  id:"312", name: "CP03 סומק מאט", price:200, qty:15, image:Matte_blush_CP03,
description: "פורמולה בעלת מרקם קרמי וחלק בזכות שימוש בחומרי גלם מובחרים,"+
"נצמדת בצורה מושלמת לעור הפנים ומעניקה תחושת חלקות גבוהה-"+
"תוך הענקת צבע ללחיים ויצירת מעטה מגן דק וקליל.",qtyInTheCard:0},
{  id:"313", name: "BL סומק מאט בגווני", price: 29.9, qty:170, image:Matte_blush_in_BL_shades,
description: "פורמולה בעלת מרקם קרמי וחלק בזכות שימוש בחומרי גלם מובחרים,",qtyInTheCard:0},
{  id:"314", name: "BM פודרה מון", price: 29.9, qty:170, image:Powder_Moon_BM,
description: "פורמולה חדשנית להסמקה, רכה ומבריקה המשלבת"+
"טכנולוגיה רבגונית של גווני הסמקה במוצר אחד.",qtyInTheCard:0},
{  id:"321", name: "קונסילר נוזלי", price:110,qty:50, image:קונסילר_נוזלי,
description: "פורמולה ייחודית, עמידה במים,"+
"מכילה חומר פעיל ויעילה להעלמת קמטים והחלקת העור.",qtyInTheCard:0},
{  id:"322", name: "NC קונסילר מזין", price:110, qty:35, image:NC_nourishing_concealer,
description: "הקונסילר מאופיין בכיסוי גבוה המושג באמצעות שכבה רעננה ועדינה."+
"הנוסחה הייחודית מכילה פיגמנטים ואבקות מיקרוניות אשר מבטיחים שכבה דקה, אחידה וחלקה היוצרת גוון מושלם.",qtyInTheCard:0},
{  id:"331", name: "CS שימר נוזלי", price:90, qty:37, image:שימר_נוזלי_CS,
description: "שימר נוזלי במרקם קטיפתי חדש, קל ונוח להנחה, בעל עמידות גבוהה מתייבש במהירות ואינו מלכלך. ",qtyInTheCard:0},
// {  id:"332", name: "שימר", price:200, qty:70, image:{שימר},
// description: "פודרה מבריקה, בעלת אפקט מטאלי, חלקה ונעימה למגע."+
// "נוסחה חדשנית המעניקה כיסוי מעולה וממזערת פגמים ופיגמנטציה."},
{  id:"341", name: "מייקאפ פודרה", price:200,qty:30, image:מייקאפ_פודרה_FP,
description: "מוצר דו-שימושי המאפשר מריחת מייק-אפ באמצעות ספוגית לחה או משמש כפודרה באמצעות מברשת יבשה.",qtyInTheCard:0},
{  id:"342", name: "פודרה אבקה שקופה", price: 32, qty:35, image:פודרה_אבקה_שקופ_LP03,
description: "פודרה דקה במיוחד המעניקה מראה טבעי, חלק ונטול פגמים"+
"יחד עם מגע משי לעור הפנים.",qtyInTheCard:0}
, {  id:"343", name: "HD פודרה", price:220, qty:15, image:פודרה_HD,
description: "פודרה  HD דקה ושקופה בעלת מגע קטיפתי וחלק המבטיחה אפקט טבעי בגימור מט."+
"הפודרה אינה משנה את גוון האיפור ומתאימה לכל גוון וסוגי העור.",qtyInTheCard:0},
{  id:"351", name: "מסיר איפור", price:160, qty:65, image:makeup_remover,
description: "תכשיר ניקוי עדין הממיס את שרידי האיפור מפני העור ביסודיות."+
"מכיל ויטמין E נוגד חמצון, אינו מייבש את העור ומותיר אותו רך"+
"ונעים למגע לשימוש לפני הנחת קרם הלחות.",qtyInTheCard:0},
{  id:"352", name: "קרם לחות", price:160, qty:38, image:Moisturizer,
description: "קרם לחות עדין ומרגיע לעור המתאים לשימוש יומיומי לעור מעורב עד יבש.",qtyInTheCard:0},
{  id:"353", name: "פריימר", price:169, qty:38, image:primer,
description: "פריימר חדשני אשר מעניק לעור אפקט ליפטינג מידי ומתמשך."+
 "פותח במיוחד כדי להעניק לעור מרקם חלק ומראה מהודק, מסייע בהפחתת מראה קמטוטים וקמטים,"+
 "מאפשר מריחת מייק-אפ בקלות לקבלת איפור מושלם לשעות ארוכות .",qtyInTheCard:0}
]
//#endregion
//😊😊😊😊


const productsReducer = (state = MakeupState, action) =>{
    // Actions 
    switch(action.type){
        case "decrease Qty":
      
            const newProducts = [...state]
         newProducts.find((shopitem)=>shopitem.id===action.id).qty-=1
         newProducts.find((shopitem)=>shopitem.id===action.id).qtyInTheCard+=1 
    
        
        // newProducts[action.index].qtyInTheCard = newProducts[action.index].qtyInTheCard+1
        return newProducts
        case "decrease QtyProducts":
            
            const newProductss = [...state]
         newProductss.find((shopitem)=>shopitem.id===action.id).qty-=1
        //  newProductss.find((shopitem)=>shopitem.id===action.id).qtyInTheCard+=1 
    
        
        // // newProducts[action.index].qtyInTheCard = newProducts[action.index].qtyInTheCard+1
        // return newProducts
        case "add Qty":
            const newProducts1 = [...state]
            // newProducts1[action.index].qty = newProducts1[action.index].qty+1
            newProducts1.find((shopitem)=>shopitem.id===action.id).qty+=1
        //  newProducts1.find((shopitem)=>shopitem.id===action.id).qtyInTheCard-=1 
            return newProducts1
            // case "decrease Qty In The Cart":
            //     const newProducts2 = [...state]
            //     if( newProducts2[action.index].qtyInTheCard>0){
            //     newProducts2[action.index].qty = newProducts2[action.index].qty+1
            //     newProducts2[action.index].qtyInTheCard = newProducts2[action.index].qtyInTheCard-1
            // }}
      
        default:
            return state
    }
}
export default  productsReducer