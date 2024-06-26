console.clear();
console.log('-------------------------------');
//console.log(window.performance.now());
function Node(data) {
  this.data = data;
  this.count = 1;
  this.parent = null;
  this.leftRef = null;
  this.rightRef = null;
}
Node.prototype.getData = function () {
  return this.data;
};
Node.prototype.setData = function (data) {
  this.data = data;
  return this;
};
Node.prototype.getCount = function () {
  return this.count;
};
Node.prototype.increment = function () {
  this.count++;
};
Node.prototype.decrement = function () {
  this.count--;
};
Node.prototype.setParentNode = function (node) {
  this.parent = node;
};
Node.prototype.getParentNode = function () {
  return this.parent;
};
Node.prototype.setRightNode = function (node) {
  this.rightRef = node;
  return this;
};
Node.prototype.getRightNode = function () {
  return this.rightRef;
};
Node.prototype.getLeftNode = function () {
  return this.leftRef;
};
Node.prototype.setLeftNode = function (node) {
  this.leftRef = node;
  return this;
};
function Tree(data) {
  this.root = data ? new Node(data) : null;
}
Tree.prototype.getRootNode = function () {
  return this.root;
};
Tree.prototype.getChildCount = function (node, count) {
  if (null != node) {
    var left = node.getLeftNode(),
      right = node.getRightNode();
    count++;
    count = this.getChildCount(left, count);
    count = this.getChildCount(right, count);
  }
  return count;
};
Tree.prototype.getExtrmLeftNode = function (node) {
  while (null != node.getLeftNode()) {
    node = node.getLeftNode();
  }
  return node;
};
Tree.prototype.getExtrmRightNode = function (node) {
  while (null != node.getRightNode()) {
    node = node.getRightNode();
  }
  return node;
};
Tree.prototype.balance = function (node) {
  if (node) {
    var leftCount = this.getChildCount(node.getLeftNode(), 0),
      rightCount = this.getChildCount(node.getRightNode(), 0);
    var parent = node.getParentNode(),
      left = node.getLeftNode(),
      right = node.getRightNode(),
      leaf = null;
    if (Math.abs(leftCount - rightCount) > 1) {
      if (leftCount > rightCount) {
        //right rotation
        leaf = this.getExtrmRightNode(left);
        if (leaf != left) {
          if (leaf.getLeftNode()) {
            leaf.getLeftNode().setParentNode(leaf.getParentNode());
          }
          leaf.getParentNode().setRightNode(leaf.getLeftNode());
          left.setParentNode(leaf);
          leaf.setLeftNode(left);
        }
        leaf.setParentNode(parent);
        node.setParentNode(leaf);
        node.setLeftNode(null);
        leaf.setRightNode(node);
        if (parent) {
          if (parent.getData() > left.getData()) {
            parent.setLeftNode(leaf);
          } else {
            parent.setRightNode(leaf);
          }
        } else {
          this.root = leaf;
        }
        this.balance(leaf);
      } else {
        //left rotation
        leaf = this.getExtrmLeftNode(right);
        if (leaf != right) {
          if (leaf.getRightNode()) {
            leaf.getRightNode().setParentNode(leaf.getParentNode());
          }
          leaf.getParentNode().setLeftNode(leaf.getRightNode());
          right.setParentNode(leaf);
          leaf.setRightNode(right);
        }
        leaf.setParentNode(parent);
        node.setParentNode(leaf);
        node.setRightNode(null);
        leaf.setLeftNode(node);
        if (parent) {
          if (parent.getData() > right.getData()) {
            parent.setLeftNode(leaf);
          } else {
            parent.setRightNode(leaf);
          }
        } else {
          this.root = leaf;
        }
        this.balance(leaf);
      }
    } else {
      this.balance(left);
      this.balance(right);
    }
  }
};
Tree.prototype.insert = function (data) {
  var node = this.root;
  if (null == node) {
    this.root = new Node(data);
    return;
  }
  while (null != node) {
    if (data == node.getData()) {
      break;
    } else if (data > node.getData()) {
      if (null == node.getRightNode()) {
        break;
      }
      node = node.getRightNode();
    } else if (data < node.getData()) {
      if (null == node.getLeftNode()) {
        break;
      }
      node = node.getLeftNode();
    }
  }
  var newNode = new Node(data);
  if (data == node.getData()) {
    node.increment();
  } else if (data < node.getData()) {
    newNode.setLeftNode(node.getLeftNode());
    newNode.setParentNode(node);
    node.setLeftNode(newNode);
  } else if (data > node.getData()) {
    newNode.setRightNode(node.getRightNode());
    newNode.setParentNode(node);
    node.setRightNode(newNode);
  }
  this.balance(this.root);
};
Tree.prototype.inorder = function (node, arr) {
  if (null != node) {
    arr = this.inorder(node.getLeftNode(), arr);
    var i = node.getCount();
    while (i > 0) {
      arr.push(node.getData());
      i--;
    }
    arr = this.inorder(node.getRightNode(), arr);
  }
  return arr;
};
Tree.prototype.printSorted = function () {
  var root = this.root,
    arr = [];
  this.inorder(root, arr);
  return arr;
};
Tree.prototype.median = function () {
  var arr = this.printSorted(),
    len = arr.length;
  if (len % 2 == 0) {
    return ((arr[len / 2] + arr[len / 2 - 1]) / 2).toFixed(1);
  }
  return arr[(len - 1) / 2].toFixed(1);
};
var tree = new Tree();
//var sure = [87592, 39913, 29754, 7341, 13823, 11277, 38699, 48439, 97628, 7295, 24386, 13888];
var sure = [
  94455, 20555, 20535, 53125, 73634, 148, 63772, 17738, 62995, 13401, 95912,
  13449, 92211, 17073, 69230, 22016, 22120, 78563, 16571, 1817, 41510, 74518,
  81638, 89659, 60445, 35597, 15237, 88830, 26019, 77519, 10914, 36827, 98074,
  31450, 89952, 71709, 31598, 70076, 5799, 10945, 83478, 1711, 24394, 92041,
  18784, 93624, 30409, 57256, 88540, 46981, 75425, 30050, 21499, 57064, 19709,
  98296, 92661, 51299, 87127, 35032, 45170, 98041, 71859, 43245, 45843, 78164,
  31306, 93793, 48240, 37105, 4738, 31718, 38816, 45484, 23759, 73952, 55461,
  70521, 47560, 44001, 17502, 22986, 90403, 39001, 96402, 26464, 53649, 5415,
  77763, 40776, 40447, 22934, 55170, 28659, 82531, 1013, 6823, 13837, 94807,
  71415, 67294, 15897, 19486, 22462, 61382, 59597, 12766, 16843, 30118, 60326,
  77196, 47620, 83312, 67599, 2973, 96066, 94063, 56623, 1481, 88179, 13751,
  58281, 11113, 68921, 86940, 93644, 86287, 10115, 23833, 97446, 81530, 91127,
  13343, 17368, 29941, 74725, 76966, 42707, 7920, 7084, 3033, 85116, 71057,
  2698, 69067, 74030, 98764, 63131, 47005, 16598, 51310, 60757, 74879, 78775,
  29678, 61819, 88771, 32317, 88286, 12604, 29763, 86168, 20083, 43107, 3537,
  50024, 34184, 80503, 92731, 58457, 87587, 12116, 59925, 58644, 14814, 28993,
  49027, 29931, 8476, 96032, 46529, 76138, 56789, 21408, 54913, 2820, 99579,
  43684, 51489, 87865, 72640, 81253, 90385, 9075, 40712, 93922, 75451, 91248,
  74425, 84534, 66057, 78365, 96650, 25983, 53361, 27817, 54976, 18740, 74100,
  79804, 14773, 20629, 55942, 87914, 58389, 10855, 7086, 74320, 70891, 58576,
  78537, 59883, 56181, 68922, 68958, 13245, 62845, 44409, 4493, 53622, 45295,
  70551, 48339, 41945, 12886, 1701, 86114, 84214, 20441, 60214, 64018, 51566,
  97195, 19960, 55833, 55584, 47167, 62919, 29904, 18058, 37847, 8441, 77941,
  94028, 93716, 63251, 7273, 56561, 24012, 28119, 26535, 69307, 15022, 74875,
  11252, 27908, 92928, 13719, 12122, 13369, 73933, 76140, 81288, 71129, 12452,
  37121, 26713, 59619, 16392, 72970, 77677, 54240, 97763, 71970, 48268, 91479,
  51573, 71894, 64392, 75585, 13, 90928, 44892, 15035, 65803, 72496, 42943,
  58731, 86215, 71417, 88452, 76501, 63909, 86092, 47630, 76361, 39565, 90695,
  35980, 55958, 80017, 30009, 26550, 94133, 18331, 74818, 1964, 69904, 46712,
  66357, 45489, 63077, 73637, 6733, 78112, 55792, 95581, 37407, 30875, 98149,
  8824, 35679, 74650, 89085, 21772, 38632, 81798, 77689, 29327, 34130, 49999,
  9345, 64139, 76549, 3478, 98822, 51368, 21794, 68726, 14432, 88151, 30567,
  77510, 78140, 53652, 71974, 33932, 49234, 9382, 81159, 63735, 34558, 16839,
  38385, 39996, 54963, 93369, 21794, 32652, 22696, 55925, 82652, 48393, 36416,
  59201, 68223, 35239, 26921, 90018, 20317, 57706, 78169, 50885, 51568, 72662,
  20889, 23542, 6594, 86475, 49276, 87754, 50210, 187, 20945, 4947, 40183,
  75908, 98316, 61977, 24912, 37365, 34254, 23916, 85758, 70671, 99470, 53982,
  5910, 26391, 44000, 42579, 449, 38521, 9816, 52017, 27535, 30706, 91912,
  34130, 17181, 41188, 38236, 83744, 57727, 59181, 5043, 97910, 51441, 19712,
  76240, 76353, 57077, 26846, 270, 42835, 97517, 99740, 13169, 19779, 42483,
  73521, 62359, 59285, 28395, 88527, 11302, 55930, 19233, 19566, 6412, 52767,
  77107, 61000, 52863, 34834, 20181, 57906, 49097, 87974, 77618, 41689, 80680,
  51047, 68535, 80950, 10235, 82405, 97042, 23404, 2184, 55877, 13278, 80895,
  15162, 41673, 69423, 42817, 13955, 5008, 62383, 20368, 57775, 39490, 81368,
  10638, 90677, 17902, 84897, 39774, 22228, 78867, 81463, 2908, 29915, 66350,
  83858, 40150, 48755, 97252, 79906, 67292, 53130, 9536, 48187, 84644, 67561,
  33962, 43813, 81517, 38971, 6197, 18237, 13098, 62039, 99605, 23737, 52716,
  33859, 24986, 8842, 56088, 3853, 6657, 58996, 50120, 73008, 59207, 90270,
  21763, 72811, 86529, 89055, 25941, 96065, 53595, 26938, 63627, 87557, 70751,
  45144, 26528, 93300, 79733, 55979, 55340, 95690, 96068, 24408, 29550, 21054,
  33251, 1990, 41259, 39908, 77338, 91380, 12916, 36545, 81650, 51032, 9357,
  84531, 56439, 51650, 80597, 10034, 94940, 60576, 97592, 65692, 5720, 40472,
  58992, 1805, 96451, 30684, 97495, 92519, 71445, 27045, 29925, 4696, 45387,
  71185, 60956, 22726, 62565, 90225, 59271, 60567, 57609, 84980, 45099, 14048,
  52983, 25696, 24083, 47923, 86272, 38027, 13615, 8344, 78499, 88960, 10149,
  91303, 35996, 7644, 174, 7441, 51042, 30100, 28489, 96429, 1285, 5798, 35507,
  63850, 12375, 11131, 40769, 69984, 96111, 85868, 84032, 49094, 27916, 24467,
  13370, 30540, 62494, 43337, 55236, 40994, 48649, 81737, 48649, 84646, 5734,
  48823, 8439, 56776, 78923, 53281, 69557, 96560, 59079, 5065, 76762, 87806,
  32548, 17532, 57790, 28659, 3400, 58174, 94106, 47669, 82642, 23828, 78209,
  45136, 67165, 33446, 2482, 15815, 15183, 51131, 16813, 20917, 99955, 25252,
  94045, 95230, 78533, 79955, 91791, 53964, 1372, 84905, 58122, 33920, 2437,
  15912, 78931, 22190, 90439, 89389, 69859, 73081, 13217, 64420, 18217, 80383,
  97866, 37052, 96198, 29402, 88183, 13011, 50319, 4490, 54615, 60717, 16073,
  49501, 40672, 7864, 19817, 42044, 9121, 77940, 75964, 11559, 10204, 54895,
  50101, 643, 44285, 36312, 73724, 57502, 732, 8294, 54237, 98599, 45346, 66787,
  44353, 49881, 79798, 94672, 54372, 50766, 55389, 70445, 267, 96061, 94661,
  36436, 54457, 3782, 14376, 30421, 31693, 24581, 1669, 98146, 41576, 45954,
  34458, 15301, 19808, 35191, 39947, 90398, 50142, 1645, 57185, 94495, 51526,
  53336, 5519, 22250, 4102, 77261, 92695, 20721, 89674, 3708, 57157, 44132,
  23843, 87886, 90905, 71888, 12467, 92574, 70035, 70395, 54880, 20845, 2048,
  91041, 72388, 41995, 81439, 38882, 43640, 38624, 49729, 11519, 8312, 55249,
  33769, 12414, 48862, 42817, 49487, 38536, 46525, 6645, 82668, 86720, 94531,
  73574, 58609, 23350, 82500, 44996, 93745, 37381, 82193, 95794, 28422, 54582,
  54141, 9861, 9816, 14134, 64837, 59546, 25653, 73150, 14795, 59422, 1916,
  63657, 2239, 67756, 18545, 65117, 74401, 1214, 51837, 85284, 91140, 10446,
  24986, 73640, 71794, 35083, 27373, 53988, 47229, 55795, 24922, 1371, 82008,
  34738, 15505, 63198, 94284, 57510, 52700, 25431, 16932, 70968, 5440, 35524,
  38724, 23986, 641, 29477, 41552, 52478, 31113, 32692, 79277, 56099, 22684,
  67423, 7535, 50058, 21411, 54764, 22205, 62685, 56135, 20566, 97424, 87992,
  116, 91708, 45502, 69168, 33492, 78787, 40136, 38932, 14311, 78861, 62918,
  31304, 24690, 4470, 134, 55804, 53514, 79411, 11903, 76199, 63187, 19438,
  42609, 84598, 90555, 81166, 63636, 63042, 18084, 61060, 51035, 18200, 69120,
  12889, 3720, 2612, 8028, 43857, 41545, 38691, 39070, 4463, 69995, 63760,
  25286, 86482, 19564, 78800, 82245, 47820, 71351, 45432, 83610, 13960, 46383,
  74165, 11479, 10019, 53560, 29563, 71079, 4595, 64116, 56551, 33836, 67836,
  59164, 58217, 28045, 17061, 96908, 67115, 37876, 83256, 47228, 63162, 69738,
  83144, 58315, 51983, 47316, 29666, 97416, 30927, 59979, 60151, 21444, 71458,
  70170, 75004, 17373, 41249, 95951, 97841, 97800, 46140, 82030, 73316, 4357,
  10075, 90377, 17617, 93543, 28254, 17225, 40771, 7768, 3315, 40267, 66083,
  71651, 87584, 95750, 85419, 34863, 55729, 45570, 56307,
];
console.log(sure.length);
for (var i in sure) {
  //console.log(sure[i]);
  tree.insert(sure[i]);
  console.log(tree.median());
}
//tree.balance(tree.getRootNode());
//console.log(tree.median());
