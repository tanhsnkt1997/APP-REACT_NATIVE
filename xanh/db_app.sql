-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 30, 2018 lúc 04:37 PM
-- Phiên bản máy phục vụ: 10.1.37-MariaDB
-- Phiên bản PHP: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `db_app`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `id_customer` int(11) NOT NULL,
  `date_order` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total` float NOT NULL DEFAULT '0',
  `note` text,
  `status` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bill`
--

INSERT INTO `bill` (`id`, `id_customer`, `date_order`, `total`, `note`, `status`) VALUES
(1, 8, '2018-11-24 07:49:41', 133000, NULL, 0),
(2, 8, '2018-11-24 08:38:28', 133000, NULL, 0),
(3, 8, '2018-11-24 08:39:32', 133000, NULL, 0),
(4, 8, '2018-11-24 08:40:30', 133000, NULL, 0),
(5, 8, '2018-11-24 08:40:33', 133000, NULL, 0),
(6, 8, '2018-11-24 08:42:09', 133000, NULL, 0),
(7, 8, '2018-11-24 08:50:31', 133000, NULL, 0),
(8, 8, '2018-11-24 08:50:35', 133000, NULL, 0),
(9, 8, '2018-11-24 08:51:41', 133000, NULL, 0),
(10, 8, '2018-11-24 08:51:44', 133000, NULL, 0),
(11, 8, '2018-11-24 08:52:20', 133000, NULL, 0),
(12, 8, '2018-11-24 08:57:28', 133000, NULL, 0),
(13, 8, '2018-11-24 08:59:49', 133000, NULL, 0),
(14, 8, '2018-11-24 08:59:58', 133000, NULL, 0),
(15, 8, '2018-11-24 09:00:48', 133000, NULL, 0),
(16, 8, '2018-11-24 09:01:30', 133000, NULL, 0),
(17, 8, '2018-11-24 09:01:33', 133000, NULL, 0),
(18, 8, '2018-11-24 09:02:30', 133000, NULL, 0),
(19, 8, '2018-11-24 09:02:48', 133000, NULL, 0),
(20, 8, '2018-11-24 09:03:40', 133000, NULL, 0),
(21, 8, '2018-11-24 09:03:43', 133000, NULL, 0),
(22, 8, '2018-11-24 09:04:48', 133000, NULL, 0),
(23, 8, '2018-11-24 11:08:08', 254000, NULL, 0),
(24, 8, '2018-11-24 11:08:12', 254000, NULL, 0),
(25, 8, '2018-11-24 11:21:45', 254000, NULL, 0),
(26, 8, '2018-11-25 10:07:20', 1460000, NULL, 0),
(27, 8, '2018-11-25 10:07:41', 1460000, NULL, 0),
(28, 8, '2018-11-25 10:07:43', 1460000, NULL, 0),
(29, 8, '2018-11-25 10:07:54', 1460000, NULL, 0),
(30, 8, '2018-11-25 10:10:26', 1460000, NULL, 0),
(31, 8, '2018-11-25 10:10:30', 1460000, NULL, 0),
(32, 8, '2018-11-25 10:11:58', 1460000, NULL, 0),
(33, 8, '2018-11-25 10:12:01', 1460000, NULL, 0),
(34, 8, '2018-11-25 10:16:26', 133000, NULL, 0),
(35, 8, '2018-11-25 10:18:10', 133000, NULL, 0),
(36, 8, '2018-11-25 10:18:13', 133000, NULL, 0),
(37, 8, '2018-11-25 10:18:15', 133000, NULL, 0),
(38, 8, '2018-11-25 10:18:41', 133000, NULL, 0),
(39, 8, '2018-11-25 10:20:54', 133000, NULL, 0),
(40, 8, '2018-11-25 11:11:16', 121000, NULL, 0),
(41, 8, '2018-11-29 09:39:09', 1849000, NULL, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `bill_detail`
--

CREATE TABLE `bill_detail` (
  `id` int(11) NOT NULL,
  `id_bill` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` float DEFAULT '0',
  `price` float NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `bill_detail`
--

INSERT INTO `bill_detail` (`id`, `id_bill`, `id_product`, `quantity`, `price`) VALUES
(1, 1, 31, 1, 133000),
(2, 2, 31, 1, 133000),
(3, 3, 31, 1, 133000),
(4, 4, 31, 1, 133000),
(5, 5, 31, 1, 133000),
(6, 6, 31, 1, 133000),
(7, 7, 31, 1, 133000),
(8, 8, 31, 1, 133000),
(9, 9, 31, 1, 133000),
(10, 10, 31, 1, 133000),
(11, 11, 31, 1, 133000),
(12, 12, 31, 1, 133000),
(13, 13, 31, 1, 133000),
(14, 14, 31, 1, 133000),
(15, 15, 31, 1, 133000),
(16, 16, 31, 1, 133000),
(17, 17, 31, 1, 133000),
(18, 18, 31, 1, 133000),
(19, 19, 31, 1, 133000),
(20, 20, 31, 1, 133000),
(21, 21, 31, 1, 133000),
(22, 22, 31, 1, 133000),
(23, 23, 30, 1, 121000),
(24, 23, 31, 1, 133000),
(25, 24, 30, 1, 121000),
(26, 24, 31, 1, 133000),
(27, 25, 30, 1, 121000),
(28, 25, 31, 1, 133000),
(29, 26, 38, 1, 1460000),
(30, 27, 38, 1, 1460000),
(31, 28, 38, 1, 1460000),
(32, 29, 38, 1, 1460000),
(33, 30, 38, 1, 1460000),
(34, 31, 38, 1, 1460000),
(35, 32, 38, 1, 1460000),
(36, 33, 38, 1, 1460000),
(37, 34, 31, 1, 133000),
(38, 35, 31, 1, 133000),
(39, 36, 31, 1, 133000),
(40, 37, 31, 1, 133000),
(41, 38, 31, 1, 133000),
(42, 39, 31, 1, 133000),
(43, 40, 30, 1, 121000),
(44, 41, 30, 1, 121000),
(45, 41, 31, 1, 133000),
(46, 41, 34, 1, 135000),
(47, 41, 38, 1, 1460000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `images`
--

INSERT INTO `images` (`id`, `link`, `id_product`) VALUES
(54, '54.jpg', 29),
(55, '55.jpg', 29),
(56, '56.jpg', 30),
(57, '57.jpg', 30),
(58, '58.jpg', 31),
(59, '59.jpg', 31),
(60, '60.jpg', 32),
(61, '61.jpg', 32),
(62, '62.jpg', 33),
(63, '63.jpg', 33),
(64, '64.jpg', 34),
(65, '65.jpg', 34),
(66, '66.jpg', 35),
(67, '67.jpg', 35),
(70, '70.jpg', 37),
(71, '71.jpg', 37),
(72, '72.jpg', 38),
(73, '73.jpg', 38),
(74, '74.jpg', 39),
(75, '75.jpg', 39),
(78, '78.jpg', 41),
(79, '79.jpg', 41),
(80, '80.jpg', 42),
(81, '81.jpg', 42),
(82, '82.jpg', 43),
(83, '83.jpg', 43),
(84, '84.jpg', 44),
(85, '85.jpg', 44),
(86, '86.jpg', 45),
(87, '87.jpg', 45),
(88, '88.jpg', 46),
(89, '89.jpg', 46),
(90, '90.jpg', 47),
(91, '91.jpg', 47),
(92, '92.jpg', 48),
(93, '93.jpg', 48),
(94, '94.jpg', 49),
(95, '95.jpg', 49),
(96, '96.jpg', 50),
(97, '97.jpg', 50),
(98, '98.jpg', 51),
(99, '99.jpg', 51),
(100, '100.jpg', 52),
(101, '101.jpg', 52),
(102, '102.jpg', 53),
(103, '103.jpg', 53),
(104, '104.jpg', 54),
(105, '105.jpg', 54),
(106, '106.jpg', 55),
(107, '107.jpg', 55),
(108, '108.jpg', 56),
(109, '109.jpg', 56),
(110, '110.jpg', 57),
(111, '111.jpg', 57),
(112, '112.jpg', 58),
(113, '113.jpg', 58),
(114, '114.jpg', 59),
(115, '115.jpg', 59),
(116, '116.jpg', 60),
(117, '117.jpg', 60),
(118, '118.jpg', 61),
(119, '119.jpg', 61),
(120, '120.jpg', 62),
(121, '121.jpg', 62),
(122, '122.jpg', 63),
(123, '123.jpg', 63),
(124, '124.jpg', 64),
(125, '125.jpg', 64),
(126, '126.jpg', 65),
(127, '127.jpg', 65),
(128, '128.jpg', 66),
(129, '129.jpg', 66),
(130, '130.jpg', 67),
(131, '131.jpg', 67),
(134, '134.jpg', 69),
(135, '135.jpg', 69),
(136, '136.jpg', 70),
(137, '137.jpg', 70),
(138, '138.jpg', 71),
(139, '139.jpg', 71),
(140, '140.jpg', 72),
(141, '141.jpg', 72),
(142, '142.jpg', 73),
(143, '143.jpg', 73),
(144, '144.jpg', 74),
(145, '145.jpg', 74),
(146, '146.jpg', 75),
(147, '147.jpg', 75),
(148, '148.jpg', 76),
(149, '149.jpg', 76),
(150, '150.jpg', 77),
(151, '151.jpg', 77),
(152, '152.jpg', 78),
(153, '153.jpg', 78);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `id_type` int(11) DEFAULT NULL,
  `price` float DEFAULT '0',
  `color` varchar(255) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL COMMENT 'chất liệu',
  `description` text NOT NULL,
  `new` tinyint(4) NOT NULL DEFAULT '0',
  `inCollection` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `id_type`, `price`, `color`, `material`, `description`, `new`, `inCollection`) VALUES
(29, 'black off the ', 4, 124000, 'Khaki', 'leather', 'A maxi dress gets breezy with sexy front slits that let your legs steal the spotlight. The smocked, off-shoulder bodice contours curves for a comfortable, flattering look day or night. It\'s a perfect match for heeled sandals and a confident strut.', 0, 0),
(30, 'contrast embro', 4, 121000, 'Fuchsia', 'leather', 'Take your vacay-ready style to the next level with the bold personality of this embroidered maxi dress. With casually elegant details like a tassel-tie plunging neckline and hi-lo hem, it promises to be a total head-turner with heels.', 1, 0),
(31, 'floral print t', 4, 133000, 'LimeGreen', 'cotton', 'Looking for that next great dress to take on summer getaways or just out to weekend brunch? We\'ve got you covered with this breezy, floral print maxi. Flirty ruffles dance along the skirt, while soft tassel-kissed straps tie the look together.', 1, 0),
(32, 'star maxi dres', 4, 1430000, 'Wheat', 'fur', 'Command attention wherever you go in this dramatic maxi dress. A charming star design adds out-of-this-world appeal to your look, while a voluminous skirt sways with your every move.', 1, 0),
(33, 'tropical print', 4, 157000, 'DarkOliveGreen', 'cotton', 'Weddings or island destinations, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fab heel, and you\'ve got effortlessly glamorous style on lock.', 0, 0),
(34, 'high neck gode', 4, 135000, 'DarkGreen', 'wool', 'A sexy, plunging neckline, open back and godet detailing on a flowing skirt...aka all the makings of our new favorite dress. Whisper-light with silky lining, this knockout number puts you at the center of attention every time. Be you, be fabulous.', 1, 1),
(35, 'ruffle wrap fr', 4, 107000, 'Tan', 'polyesters', 'Perfect for weddings or weekend dates, this fabulous, lightweight maxi brings the glam every time. With its floor-sweeping length, flirty side slit and ruffly wrap front, all it needs is a pair of heels to make it a truly knockout look.', 0, 0),
(37, 'floral print l', 4, 149000, 'Orchid', 'polyesters', 'A sweeping silhouette that\'s suited for a casually elegant weekend wedding, date night or sunny vacay. Ladder lace and buttons accentuate the beauty of the plunging cut, while partial silky lining and airy chiffon keep your look cool and breezy.', 0, 1),
(38, 'floral print s', 4, 1460000, 'DarkGoldenRod', 'silk', 'Let your shoulder steal the show in this sweet and sultry maxi dress featuring a smocked bodice and flowing skirt. The soft, stretchy fabric offers a perfectly comfortable fit every time, while a bold print keeps eyes on you.', 1, 0),
(39, 'cold shoulder ', 4, 122000, 'Magenta', 'silk', 'A floor-sweeping silhouette with easy wearability and a touch of elegance. The graceful flowing shape moves beautifully with each step, while cold shoulder sleeves make it flirty and fun. Glam it up with a few jewels for any special occasion.', 0, 0),
(41, 'chiffon halter', 4, 132000, 'Cyan', 'polyesters', 'A long, flowy look with a skin-baring retro vibe, this square neck halter maxi dress is a guaranteed head-turner. Best way to turn up the drama while wearing this one? Polished bangles and a gentle breeze.', 0, 1),
(42, 'high slit maxi', 4, 134000000, 'LightGreen', 'cotton', 'A classic maxi silhouette gets a sexy update in this daring number. Detailed with a dramatic side slit, this one\'s all about showing off those legs. Love accessories? The solid hue is the perfect blank slate to build a signature, unforgettable look.', 0, 0),
(43, 'strappy cut-ou', 4, 117000, 'Green', 'fur', 'Weddings or red carpets, this dress is ready for anything. With plunging keyhole cut-outs and skin-baring strappy sides, less is more when it comes to this dramatic look. Add a fabulous heel, and you\'ve got effortlessly glamorous style on lock.', 1, 0),
(44, 'tie waist popo', 4, 142000, 'IndianRed', 'polyesters', 'Keep it simple without compromising style. A button placket, convertible roll tab sleeves and tied waist make this dress laid-back look, while the right accessories can take its maxi length to straight-up glam. Go on, be fabulous.', 0, 0),
(45, 'floral surplic', 4, 1410000, 'Cyan', 'cotton', 'Look effortlessly elegant in silky-soft fabric and a feminine floral print. A plunging surplice neckline reveals a flirty peek of skin, while flowy material glides with your every move. Pair with heels and sparkly jewelry to stun in a crowd.', 0, 1),
(46, 'lace sleeve si', 5, 117000, 'RoyalBlue', 'silk', 'The \'90s are alive and well when you toss on this silky, sexy slip dress. The lace top gives the illusion of a retro layered look, while the modest length and slinky fit take those throwback vibes one step further. Guaranteed to get you noticed.', 0, 0),
(47, 'asymmetrical g', 5, 124000, 'MediumSeaGreen', 'leather', 'Walk into the club or a party in confidence. An asymmetrical design adds modern flair to your look, while sleek fabric drapes over your curves comfortably. Metallic sheen draws the eye for a show-stopping ensemble.', 1, 0),
(48, 'mesh embellish', 5, 109000, 'Gainsboro', 'leather', 'Turn heads at your next get-together. Stretch-enhanced fabric clings to your curves for a slinky silhouette, while mesh panels reveal flirty peeks of skin. A circular design commands attention whether you\'re on the dance floor or sipping champagne.', 1, 0),
(49, 'deco sequin em', 5, 133000, 'DarkSeaGreen', 'cotton', 'The art deco-inspired geometric shapes and angles of this sequin design flatter and sparkle. You\'ll love both the feel of the full silky lining and the way the stretchy cotton shell enhances your lovely shape.', 1, 1),
(50, 'mock neck zip ', 5, 118000, 'Tomato', 'polyesters', 'A sleeveless sheath dress that works for you 24-7. This ribbed beauty\'s shapely silhouette and exposed front zipper make it an ideal option for happy hour or a swanky dinner date.', 1, 0),
(51, 'floral surplic', 5, 152000, 'DarkGrey', 'polyesters', 'Silky fabric drapes over your frame comfortably, while a floral print adds feminine flair to your look. A gathered waist cinches your silhouette and commands attention. Pair with heels and statement jewelry for a stunning desk-to-dinner ensemble.', 0, 0),
(52, 'mock neck keyh', 5, 127000, 'Red', 'polyesters', 'A flattering shape in a soft, silky fabric gains an architectural edge with wide pleating at the neckline. At the center, a keyhole slit reveals a dramatic hint of skin. Add a stretch belt to play up the structured side of this fun and flirty dress.', 1, 1),
(53, 'faux wrap chif', 5, 1370000, 'Tomato', 'cotton', 'Boasting one-piece styling for ease and a faux wrap cut that\'s all about some slinkiness, this romper\'s the right answer for those \"what am I wearing to the party\" moments. Just add heels and make it your moment.', 0, 0),
(54, 'pieced lace zi', 5, 148000, 'DarkGoldenRod', 'wool', 'This fitted dress packs some seriousness sexiness into its body-loving, at-the-knee silhouette. Sultry pieced lace and a full-length front zipper make a daring, sizzling team that, when paired with heels, can\'t help but get you noticed.', 0, 0),
(55, 'lace trim surp', 5, 107000, 'Khaki', 'silk', 'Keep up that confidence on the breeziest evenings with this one-piece. It features the feminine charm of a wrap skirt with the coverage of shorts underneath. Pair its sexy plunging neckline with a lacy bralette to really turn up the heat.', 1, 0),
(56, 'lace trapeze d', 5, 113000, 'Thistle', 'wool', 'Covered in lace, this casual-chic dress works wherever you need it to. Dress it up with heels and a necklace for going out, or flat strappy sandals and a light layer when you need some cool go-to street style.', 0, 1),
(57, 'mock neck keyh', 5, 1450000, 'Sienna', 'fur', 'The simple beauty of this mock neck dress paired with the surprising sexiness of its front keyhole cut-out will make it your favorite new canvas for all kinds of accessories. Wear it with heels to steal the spotlight at a party or flirty night out.', 1, 0),
(58, 'ruched slash n', 5, 105000, 'DarkCyan', 'polyesters', 'A slash of sexiness complements the crew neck of this double-take-worthy dress, finished in dramatic ruching for total style crush status. Soft, stretchy and super versatile, this one might just become your new slinky-sophisticated obsession.', 1, 0),
(59, 'stripe lace-up', 5, 113000, 'Black', 'wool', 'Silky fabric hugs your curves for a sleek, sexy silhouette. Classic stripes combine with a modern lace-up neckline to enliven your looks. Pair with heels and sparkly jewelry to make a statement at the office or out on the town.', 0, 1),
(60, 'cold shoulder ', 5, 14700000, 'LightCoral', 'silk', 'A flowy trapeze hem sways with your every move and makes your stems look miles long. All-over lace adds feminine allure, while a cold shoulder cut bares a little skin. Pair with sandals for a romantic on-the-town ensemble.', 0, 0),
(61, 'tiered lace fi', 6, 119000, 'White', 'fur', 'Spring soirées, summer weddings, dinner dates - get a dress that does it all. Made from lovely lace with a silky lining, this flattering piece is equal parts elegant and versatile. Try it with heels and statement jewelry, and be absolutely stunning.', 0, 0),
(62, 'floral smocked', 6, 113000, 'ForestGreen', 'wool', 'This little cutie is the perfect combination of sugar and spice. A sweet floral print and swishy skirt add feminine flair to your look, while a smocked bodice and off-the-shoulder neckline provide a so-hot twist.', 0, 0),
(63, 'floral print r', 6, 108000, 'SpringGreen', 'fur', 'Your shoulders will steal the show in this beautifully breezy dress featuring a ruffle overlay for flirty fun in the sun. Its supple, lightweight feel, silky lining and curve-loving stretch fit start your vacay on the ultimate feel-good note.', 0, 1),
(64, 'tiered eyelet ', 6, 100000, 'MediumAquaMarine', 'wool', 'All eyes on you in this dreamy dress. An eyelet design adds texture and charm to your ensemble, while a tiered profile sweetens the look. Pair with a blazer and heels to up the wow factor.', 0, 0),
(65, 'color blocked ', 6, 1440000, 'Tomato', 'silk', 'Silky soft and irresistibly stylish...pretty much all you need to know about this summery stunner. Side ties and a built-in bandeau create a comfortable, flattering fit, so all you have to do is toss on heels to be your most confident, chic self.', 1, 0),
(66, 'ruffle off the', 6, 1350000, 'Ivory', 'silk', 'This simply stunning one-piece wonder offers plenty of endless-summer feels with its nod-to-boho neckline, easy-wear fabric and playful ruffles. Glam it up with a pair of shimmering sandals and bold earrings, and dare to light up a room.', 0, 0),
(67, 'large floral p', 6, 1470000, 'Maroon', 'silk', 'A breezy easy-wear day dress with a kiss of casual elegance. Fluttering ruffles trace the surplice neckline and hem for playful movement with each step. Accessorize with strappy sandals on your next vacay or date night.', 1, 0),
(69, 'faux wrap chif', 7, 107000, 'Khaki', 'wool', 'Boasting one-piece styling for ease and a faux wrap cut that\'s all about some slinkiness, this romper\'s the right answer for those \"what am I wearing to the party\" moments. Just add heels and make it your moment.', 0, 0),
(70, 'long sleeve ch', 7, 115000, 'Maroon', 'silk', 'The sexy front keyhole, sheer sleeves, magical skort look and playful mixed print chevron stripe make this a fun, boho weekend choice. Dress up this effortlessly wearable, versatile romper with bangles and pointed toe flats.', 1, 0),
(71, 'pleated surpli', 7, 154000, 'BlanchedAlmond', 'cotton', 'Dressing for a night out just got easier with this one-piece stunner. Made from a wonderfully silky fabric, its pleated texture and ruffly sleeves were destined to wow from wear one. Polish the plunge front with a necklace for extra dazzle.', 0, 0),
(72, 'surplice cami ', 7, 1470000, 'SandyBrown', 'silk', 'Spring into warm weather with this fresh, flirty romper. A faux wrap front adds visual interest to your look, while cami-inspired straps bare a little skin for a so-sexy silhouette. Pair with sandals and sunnies and hit the beach in style.', 0, 1),
(73, 'strapless (min', 7, 112000, 'LightSteelBlue', 'fur', 'Radiate dramatic vibes at your next formal affair. This stunning romper features the luxe look and feel of leather for a slinky, sultry look. A cut-out back shows a flirty peek of skin, and the silhouette is irresistibly leggy.', 0, 0),
(74, 'long-sleeve su', 7, 1410000000, 'Pink', 'polyesters', 'Go out this weekend in style with a fun, flirty romper. An easygoing surplice cut and front cut-out team up with a classic shade and flowing fabric that ends in soft, dance-all-night shorts. It\'s lightweight and so, so pretty.', 1, 1),
(75, 'lace trim surp', 7, 148000, 'Salmon', 'silk', 'Keep up that confidence on the breeziest evenings with this one-piece. It features the feminine charm of a wrap skirt with the coverage of shorts underneath. Pair its sexy plunging neckline with a lacy bralette to really turn up the heat.', 0, 0),
(76, 'petite cold sh', 7, 156000, 'LimeGreen', 'silk', 'Turn heads at your next dinner party in this sleek, sexy romper. A cold-shoulder cut and romantic lace yoke neckline bare a little skin for an alluring ensemble. Designed to fit and flatter your 5\'4\" and under frame.', 1, 0),
(77, 'tie-back kimon', 7, 118000, 'PeachPuff', 'polyesters', 'On days when it\'s too breezy for a dress, this flawless romper has you covered. Crafted with a supple feel, it makes the transition from day date to dinner and drinks absolutely fabulous. Calling all heeled sandals or booties with this one.', 0, 1),
(78, 'cold shoulder ', 7, 1440000, 'MediumSeaGreen', 'cotton', 'Turn heads at your next dinner party in this sleek, sexy romper. A cold-shoulder cut and romantic lace yoke neckline bare a little skin for an alluring ensemble. Pair with heels and statement jewelry for a hot on-the-town look.', 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_type`
--

CREATE TABLE `product_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `product_type`
--

INSERT INTO `product_type` (`id`, `name`, `image`) VALUES
(4, 'Maxi Dress', 'maxi.jpg'),
(5, 'Party Dress', 'party.jpg'),
(6, 'Mini Dress', 'mini.jpg'),
(7, 'Rompers', 'rompers.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `ImagesUser` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone`, `address`, `ImagesUser`) VALUES
(1, 'huong@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', NULL, NULL, NULL, ''),
(2, '', 'd41d8cd98f00b204e9800998ecf8427e', '', NULL, NULL, ''),
(4, 'huonggg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL, ''),
(6, 'huonggssssg@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'huong', NULL, NULL, ''),
(7, 'huossssggag@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b', 'Hương siêu nhân', '234567890', '123343 lê thị riêng', ''),
(8, 'Aaaa', '65ba841e01d6db7733e90a5b7f9e6f80', 'aaaaaa111222', 'cccccccccccc', 'bbbbbbbbbb', 'ed0a9164-75f2-4fde-a47d-4ed248be58ac.png'),
(9, 'anhan', 'd9a009875945072fe53eda5236fcf52a', 'uahujiajioasjio', NULL, NULL, ''),
(10, 'ss', '2d02e669731cbade6a64b58d602cf2a4', 'sss', NULL, NULL, ''),
(11, 'assasdad', '81dc9bdb52d04dc20036dbd8313ed055', 'assdadsa', NULL, NULL, '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f1` (`id_customer`);

--
-- Chỉ mục cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f2` (`id_bill`),
  ADD KEY `f3` (`id_product`);

--
-- Chỉ mục cho bảng `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f5` (`id_product`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `f4` (`id_type`);

--
-- Chỉ mục cho bảng `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `bill`
--
ALTER TABLE `bill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT cho bảng `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT cho bảng `product_type`
--
ALTER TABLE `product_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `f1` FOREIGN KEY (`id_customer`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `bill_detail`
--
ALTER TABLE `bill_detail`
  ADD CONSTRAINT `f2` FOREIGN KEY (`id_bill`) REFERENCES `bill` (`id`),
  ADD CONSTRAINT `f3` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `f5` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `f4` FOREIGN KEY (`id_type`) REFERENCES `product_type` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
