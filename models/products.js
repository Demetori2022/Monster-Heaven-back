import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少名稱欄位']
  },
  price: {
    type: Number,
    min: [0, '價格格式錯誤'],
    required: [true, '缺少價格欄位']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    required: [true, '缺少系列欄位'],
    enum: {
      values: ['哥吉拉', '超人力霸王', '卡美拉'],
      message: '系列分類錯誤'
    }
  },
  brand: {
    type: String,
    required: [true, '缺少品牌欄位'],
    enum: {
      values: ['X-PLUS', 'S.H.Figuarts', 'NECA'],
      message: '品牌分類錯誤'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
