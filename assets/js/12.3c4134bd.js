(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{363:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("You can install the latest release from "),s("a",{attrs:{href:"https://pypi.org/project/foolbox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyPI"),s("OutboundLink")],1),t._v(" using "),s("code",[t._v("pip")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("python3 -m pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" foolbox\n")])])]),s("p",[t._v("Foolbox requires Python 3.6 or newer. To use it with "),s("a",{attrs:{href:"https://pytorch.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyTorch"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://www.tensorflow.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("TensorFlow"),s("OutboundLink")],1),t._v(", or "),s("a",{attrs:{href:"https://github.com/google/jax",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAX"),s("OutboundLink")],1),t._v(", the respective framework needs to be installed separately. These frameworks are not declared as dependencies because not everyone wants to use and thus install all of them and because some of these packages have different builds for different architectures and CUDA versions. Besides that, all essential dependencies are automatically installed.")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),s("p",[t._v("Foolbox requires Python 3.6 or newer.")])]),t._v(" "),s("h2",{attrs:{id:"getting-a-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-model"}},[t._v("#")]),t._v(" Getting a Model")]),t._v(" "),s("p",[t._v("Once Foolbox is installed, you need to turn your PyTorch, TensorFlow, or JAX model into a Foolbox model.")]),t._v(" "),s("h3",{attrs:{id:"pytorch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pytorch"}},[t._v("#")]),t._v(" PyTorch")]),t._v(" "),s("p",[t._v("For PyTorch, you simply instantiate your "),s("code",[t._v("torch.nn.Module")]),t._v(" and then pass it\nto "),s("code",[t._v("fb.PyTorchModel")]),t._v(". Here we use a pretrained ResNet-18 from "),s("code",[t._v("torchvision")]),t._v(".\nAdditionally, you should specify the preprocessing expected by the model\n(e.g. subtracting "),s("code",[t._v("mean")]),t._v(", and dividing by "),s("code",[t._v("std")]),t._v(", along the third axis from the back)\nand the bounds of the input space (before the preprocessing).")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PyTorch ResNet18")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torch\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" torchvision\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torchvision"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resnet18"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pretrained"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npreprocessing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.485")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.456")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.406")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.229")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.224")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.225")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbounds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PyTorchModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bounds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preprocessing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("preprocessing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"tensorflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tensorflow"}},[t._v("#")]),t._v(" TensorFlow")]),t._v(" "),s("p",[t._v("For TensorFlow, you simply instantiate your "),s("code",[t._v("tf.keras.Model")]),t._v(" and then pass it\nto "),s("code",[t._v("fb.TensorFlowModel")]),t._v(". Here we show three examples using pretrained ImageNet\nmodels. Additionally, you should specify the preprocessing expected by the model\n(e.g. flipping an axis, here from RGB to BGR, subtracting "),s("code",[t._v("mean")]),t._v(",\nand dividing by "),s("code",[t._v("std")]),t._v(", along the third axis from the back)\nand the bounds of the input space (before the preprocessing).")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TensorFlow ResNet50")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResNet50"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weights"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imagenet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npreprocessing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flip_axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mean"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("103.939")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("116.779")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.68")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbounds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TensorFlowModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bounds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preprocessing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("preprocessing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# TensorFlow ResNet50V2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("applications"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResNet50V2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weights"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imagenet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npreprocessing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbounds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TensorFlowModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bounds"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preprocessing"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("preprocessing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# TensorFlow MobileNetV2\nimport tensorflow as tf\nmodel = tf.keras.applications.MobileNetV2(weights="imagenet")\npreprocessing = dict()\nbounds = (-1, 1)\nfmodel = fb.TensorFlowModel(model, bounds=bounds, preprocessing=preprocessing)\n')])])]),s("h3",{attrs:{id:"jax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jax"}},[t._v("#")]),t._v(" JAX")]),t._v(" "),s("p",[t._v("For JAX, you simply specify your model as a callable, i.e. an instance of a\nclass with a "),s("code",[t._v("__call__")]),t._v(" method or a simple function. It should take an\ninput array and return the array with predictions. You can then pass this\ncallable to "),s("code",[t._v("fb.JAXModel")]),t._v(". Additionally, you should specify the\npreprocessing (see previous examples) and\nthe bounds of the input space (before the preprocessing).")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__call__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# turn the inputs x into predictions y")]),t._v("\n        y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# replace with your real model")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" y\n\nmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbounds "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fbn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JAXModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"transform-bounds"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transform-bounds"}},[t._v("#")]),t._v(" Transform Bounds")]),t._v(" "),s("p",[t._v("Next you can optionally transform the bounds of the input space of our model.\nIn the following, we want to work with a model that has (0, 1) bounds.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("fmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform_bounds"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("If your model already had bounds "),s("code",[t._v("(0, 1)")]),t._v(", this does not do anything.\nBut if your model had different bounds, e.g. "),s("code",[t._v("(0, 255)")]),t._v(" this would adjust\nthe preprocessing accordingly such that your model now expects inputs\nbetween "),s("code",[t._v("0")]),t._v(" and "),s("code",[t._v("1")]),t._v(". This is particularly useful if you work with\ndifferent models that have different bounds.")]),t._v(" "),s("h2",{attrs:{id:"dataset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[t._v("#")]),t._v(" Dataset")]),t._v(" "),s("p",[t._v("Before we can attack our model, we first need some data.\nFor convenience, Foolbox comes with helper functions that provide\na small set of sample images from different computer vision datasets.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("samples"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imagenet'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batchsize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Note that images and labels should be a batch of native tensors, i.e.\nPyTorch tensors, TensorFlow tensors, or JAX arrays, depending on which framework\nyou use.")]),t._v(" "),s("h2",{attrs:{id:"attacking-the-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attacking-the-model"}},[t._v("#")]),t._v(" Attacking the Model")]),t._v(" "),s("p",[t._v("Now we have everything ready to attack the model. Before we do that,\nwe will quickly check its clean accuracy on our evaluation set.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accuracy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -> 0.9375 (depends on the model!)")]),t._v("\n")])])]),s("p",[t._v("To run an attack, we first instantiate the corresponding class.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("attack "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attacks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinfDeepFoolAttack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("And finally we can apply the attack on our model by passing\nthe input tensor (here "),s("code",[t._v("images")]),t._v("), the corresponding true "),s("code",[t._v("labels")]),t._v(",\nand one or more "),s("code",[t._v("epsilons")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clipped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" is_adv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epsilons"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The attack returns three tensors.")]),t._v(" "),s("ol",[s("li",[t._v("The raw adversarial examples. This depends on the attack and we cannot make an guarantees about this output.")]),t._v(" "),s("li",[t._v("The clipped adversarial examples. These are guaranteed to not be perturbed more than epsilon and thus are the actual adversarial examples you want to visualize. Note that some of them might not actually switch the class. To know which samples are actually adversarial, you should look at the third tensor.")]),t._v(" "),s("li",[t._v("The third tensor contains a boolean for each sample, indicating which samples are true adversarials that are both misclassified and within the epsilon balls around the clean samples.")])]),t._v(" "),s("p",[t._v("How to use these tensors will become more clear in a moment.")]),t._v(" "),s("h2",{attrs:{id:"multiple-epsilons"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multiple-epsilons"}},[t._v("#")]),t._v(" Multiple Epsilons")]),t._v(" "),s("p",[t._v("Usually, you should not just look at a single epsilon, but at many different epislons from small to large.\nThe most efficient way to obtain the corresponding results is by\nrunning the attack with multiple epsilons. It will automatically\nselect the right strategy depending on the type of attack.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\nepsilons "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("linspace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Let's rerun the attack for all "),s("code",[t._v("epsilons")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("raw"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clipped"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" is_adv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epsilons"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("epsilons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("The returned tensors, "),s("code",[t._v("raw")]),t._v(", "),s("code",[t._v("clipped")]),t._v(", and "),s("code",[t._v("is_adv")]),t._v(" now have an additional batch dimension for the different "),s("code",[t._v("epsilons")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"robust-accuracy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#robust-accuracy"}},[t._v("#")]),t._v(" Robust Accuracy")]),t._v(" "),s("p",[t._v("You can now obtain the robust accuracy by simply averaging "),s("code",[t._v("is_adv")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("robust_accuracy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" is_adv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("axis"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("You can now plot the robust accuracy using Matplotlib.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("epsilons"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" robust_accuracy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numpy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("You can also visualize the adversarials using "),s("code",[t._v("fb.plot.images")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"learn-more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[t._v("#")]),t._v(" Learn More")]),t._v(" "),s("p",[t._v("To learn more, have a look at our "),s("a",{attrs:{href:"https://github.com/jonasrauber/foolbox-native-tutorial/blob/master/foolbox-native-tutorial.ipynb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tutorial"),s("OutboundLink")],1),t._v(",\nthe "),s("RouterLink",{attrs:{to:"/guide/examples.html"}},[t._v("examples")]),t._v(", the "),s("a",{attrs:{href:"https://foolbox.readthedocs.io/en/stable/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),s("OutboundLink")],1),t._v(" and of course the "),s("a",{attrs:{href:"https://github.com/bethgelab/foolbox",target:"_blank",rel:"noopener noreferrer"}},[t._v("README"),s("OutboundLink")],1),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);