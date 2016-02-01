
import pathValidator from 'src/stores/reducers/PathValidator';
import {expect} from 'chai';

describe('PathValidator', ()=>{
  var fileStructure;
  var invalidPath;
  var validPath;
  var existingFileName;
  var nonExisitingFileName;
  var existingFolderName;
  var nonExisitingFolderName;

  before(()=>{
    existingFileName ='foo.js';
    existingFolderName = 'bar'
    fileStructure = {
      name:'foo',
      folders:[{
        name:existingFolderName,
        folders:[],
        files:[{name:existingFileName}]
      }]
    };
    nonExisitingFolderName = 'foobar';
    nonExisitingFileName = 'bar.js';
    invalidPath = 'bad/foo/path';
    validPath = 'foo/bar';
  })

  describe('validateFileExists', ()=>{
    it('should throw an error if the file path does not exist', ()=>{
      expect(pathValidator.validateFileExists.bind(pathValidator,fileStructure,`${invalidPath}/${nonExisitingFileName}`))
        .to.throw(Error, `The path ${invalidPath} does not exist`);
    });

    it('should throw an error if the file does not exist in the path', ()=>{
      expect(pathValidator.validateFileExists.bind(pathValidator, fileStructure, `${validPath}/${nonExisitingFileName}`))
        .to.throw(Error, `The file ${nonExisitingFileName} does not exist in ${validPath}`);
    });

    it('should not throw an error if the file exists in the correct location', ()=>{
      expect(pathValidator.validateFileExists.bind(pathValidator, fileStructure, `${validPath}/${existingFileName}`))
        .to.not.throw(Error);
    });
    it('should throw an error if the path is empty', ()=>{
      expect(pathValidator.validateFileExists.bind(pathValidator, fileStructure,''))
        .to.throw(Error, 'Must enter a valid path.');
    });
  });

  describe('validatePath',()=>{
    it('should throw an error if the path is not valid', ()=>{
      expect(pathValidator.validatePath.bind(pathValidator,fileStructure,invalidPath))
        .to.throw(Error, `The path ${invalidPath} does not exist`);
    });

    it('should not return an error message if path is valid', ()=>{
      expect(pathValidator.validatePath.bind(pathValidator,fileStructure,validPath))
        .to.not.throw();
    });

    it('should throw an error if the inner folder is not found', ()=>{
      var badPath = 'foo/badPath';
      expect(pathValidator.validatePath.bind(pathValidator,fileStructure,badPath)).
        to.throw(Error, `The path ${badPath} does not exist`);
    });
  });

  describe('validateFileDoesNotExist', ()=>{
    it('should throw an error if the file exists', ()=>{
      expect(pathValidator.validateFileDoesNotExist.bind(pathValidator,fileStructure,validPath,existingFileName)).
        to.throw(Error, `The content ${existingFileName} already exists`);
    });

    it('should not throw an error if the file does not exist', ()=>{
      expect(pathValidator.validateFileDoesNotExist.bind(pathValidator,fileStructure,validPath,nonExisitingFileName)).
        to.not.throw();
    });

    it('should throw an exception if the file name is empty', ()=>{
      expect(pathValidator.validateFileDoesNotExist.bind(pathValidator,fileStructure,validPath, '')).
        to.throw(Error, 'The content\'s name () is not valid')
    });

    it('should throw an exception if the file name is not ok', ()=>{
      expect(pathValidator.validateFileDoesNotExist.bind(pathValidator,fileStructure,validPath, undefined)).
        to.throw(Error, 'The content\'s name (undefined) is not valid')
    });
  });

  describe('validateFolderDoesNotExist', ()=>{
    it('should throw an error if the folder exists', ()=>{
      expect(pathValidator.validateFolderDoesNotExist.bind(pathValidator,fileStructure,'foo',existingFolderName)).
        to.throw(Error, `The content ${existingFolderName} already exists`);
    });

    it('should not throw an error if the folder does not exist', ()=>{
      expect(pathValidator.validateFolderDoesNotExist.bind(pathValidator,fileStructure,'foo',nonExisitingFolderName)).
        to.not.throw();
    });

    it('should throw an exception if the file name is not ok', ()=>{
      expect(pathValidator.validateFolderDoesNotExist.bind(pathValidator,fileStructure,validPath, undefined)).
        to.throw(Error, 'The content\'s name (undefined) is not valid')
    });

    it('should throw an exception if the file name is empty', ()=>{
      expect(pathValidator.validateFolderDoesNotExist.bind(pathValidator,fileStructure,validPath, '')).
        to.throw(Error, 'The content\'s name () is not valid')
    });
  });

  describe('getFolderAtPath', ()=>{
    it('should get the folder at the specified path', ()=>{
      var folder = pathValidator.getFolderAtPath(fileStructure, validPath);
      expect(folder).to.be.deep.equal(fileStructure.folders[0]);
    });
  })
});
