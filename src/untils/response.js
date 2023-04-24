const successCode = (res, data) => {
    res.status(200).json({
        statusCode: 200,
        message: 'Xử lý thành công',
        data,
    })
}

const failCode = (res) => {
    res.status(400).json({
        statusCode: 400,
        message: 'Lỗi be',
    })
}

module.exports = { successCode, failCode }