const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve, join } = require('path')
const glob = require('glob')
const createLogger = require('progress-estimator')
const logger = createLogger({
  storagePath: join(__dirname, '.progress-estimator')
})

inquirer
  .prompt([{ type: 'input', name: 'compName', message: '组件名' }])
  .then((answers) => {
    const { compName: compNameDir } = answers
    if (!fs.ensureDirSync(resolve(__dirname, '../packages/' + compNameDir))) {
      inquirer
        .prompt([
          {
            type: 'confirm',
            name: 'override',
            message: '是否覆盖已有文件'
          }
        ])
        .then(({ override }) => {
          if (override) {
            fs.emptyDirSync(resolve(__dirname, '../packages/' + compNameDir))
            logger(circleCopy(compNameDir), '创建组件完成')
          }
        })
    } else {
      logger(circleCopy(compNameDir), '创建组件完成')
    }
  })

function circleCopy(
  toPath,
  fromPath = resolve(__dirname, '../comp-template/**/*')
) {
  return new Promise((resolve, reject) => {
    glob(fromPath, (err, files) => {
      files.forEach((file) => {
        fs.copySync(file, file.replace(/comp-template/, `packages/${toPath}`))
      })
      resolve()
      if (err) reject(err)
    })
  })
}
