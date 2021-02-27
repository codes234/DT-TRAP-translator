#!pip install translate
#uncomment the line if the package is not installed
#this line should be run in terminal and python should be installed
import translate
user = input("type the sentence to be translated")
from translate import Translator
translator= Translator(to_lang="tamil")
#change this to_lang to the lang u need::::::NOTE:THE LANG SHOULD BE PROPER LIKE ENGLISH, TAMIL ETC
translation = translator.translate(user)
print(translation)          
