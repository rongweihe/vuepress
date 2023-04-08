# 什么是 Encoder-Decoder ？
Encoder-Decoder 模型主要是 NLP 领域里的概念。它并不特值某种具体的算法，而是一类算法的统称。Encoder-Decoder 算是一个通用的框架，在这个框架下可以使用不同的算法来解决不同的任务。

Encoder-Decoder 这个框架很好的诠释了机器学习的核心思路：

- 将现实问题转化为数学问题，通过求解数学问题，从而解决现实问题。

Encoder 又称作编码器。它的作用就是「将现实问题转化为数学问题」

![](https://easyai.tech/wp-content/uploads/2022/08/6acff-2019-10-28-encoder.png.webp)


Decoder 又称作解码器，他的作用是「求解数学问题，并转化为现实世界的解决方案」

![](https://easyai.tech/wp-content/uploads/2022/08/9cf5a-2019-10-28-decoder.png.webp)

把 2 个环节连接起来，用通用的图来表达则是下面的样子：

![](https://easyai.tech/wp-content/uploads/2022/08/1bc89-2019-10-28-Encoder-Decoder.png.webp)

关于 Encoder-Decoder，有2 点需要说明：

不论输入和输出的长度是什么，中间的「向量 c」 长度都是固定的（这也是**它的缺陷**，下文会详细说明）

根据不同的任务可以选择不同的编码器和解码器（可以是一个 RNN ，但通常是其变种 LSTM 或者 GRU ）

只要是符合上面的框架，都可以统称为 Encoder-Decoder 模型。说到 Encoder-Decoder 模型就经常提到一个名词—— Seq2Seq。

# 什么是 Seq2Seq？
Seq2Seq（是 Sequence-to-sequence 的缩写），就如字面意思，输入一个序列，输出另一个序列。这种结构最重要的地方在于输入序列和输出序列的长度是可变的。例如下图：

![](https://easyai.tech/wp-content/uploads/2022/08/da7fc-2019-10-28-nmt-model-fast.gif)


如上图：输入了 6 个汉字，输出了 3 个英文单词。输入和输出的长度不同。

# Seq2Seq 的由来

在 Seq2Seq 框架提出之前，深度神经网络在图像分类等问题上取得了非常好的效果。在其擅长解决的问题中，输入和输出通常都可以表示为固定长度的向量，如果长度稍有变化，会使用补零等操作。

然而许多重要的问题，例如机器翻译、语音识别、自动对话等，表示成序列后，其长度事先并不知道。因此如何突破先前深度神经网络的局限，使其可以适应这些场景，成为了13年以来的研究热点，Seq2Seq框架应运而生。

# 「Seq2Seq」和「Encoder-Decoder」的关系

Seq2Seq（强调目的）不特指具体方法，满足「输入序列、输出序列」的目的，都可以统称为 Seq2Seq 模型。

而 Seq2Seq 使用的具体方法基本都属于Encoder-Decoder 模型（强调方法）的范畴。

# 总结：
- Seq2Seq 属于 Encoder-Decoder 的大范畴
- Seq2Seq 更强调目的，Encoder-Decoder 更强调方法