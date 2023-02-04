#!/bin/bash -eu

TARGET_LANG=ja
IGNORE_LANGS="${TARGET_LANG} zh"

echo
echo '# ----------------------------------------------------------------------'
echo '# git clean taeget dir'
echo '# ----------------------------------------------------------------------'
git clean ${TARGET_LANG} -d -f

echo
echo '# ----------------------------------------------------------------------'
echo '# Building find command'
echo '# ----------------------------------------------------------------------'
CMD_FIND='find . -name "*.md"'
for IGNORE_LANG in ${IGNORE_LANGS}
do
    CMD_FIND="${CMD_FIND} -not -path './${IGNORE_LANG}/*'"
done
echo "# ${CMD_FIND}"

echo
echo '# ----------------------------------------------------------------------'
echo '# COPY source to dist and basename suffix .en'
echo '# ----------------------------------------------------------------------'
for SOURCE in $(eval "${CMD_FIND} | sort")
do
    DIRNAME=$(dirname ${SOURCE})
    BASENAME=$(basename ${SOURCE} .md)

    # SOURCE=${DIRNAME}/${BASENAME}.md
    # MEMO: 「bash 変数置換」にて DIRNAME の最初の . を ./ja に置換
    DIST=${DIRNAME/"."/"./${TARGET_LANG}"}/${BASENAME}.en.md

    CMD_COPY="cp ${SOURCE} ${DIST}"
    echo ${CMD_COPY}
    eval ${CMD_COPY}
done

echo
echo '# ----------------------------------------------------------------------'
echo '# REMOVE from TARGET_LANG dirs. cause Only In TARGET_LANG dir.'
echo '# ----------------------------------------------------------------------'
for i in $(find ./${TARGET_LANG} -name '*.md' -not -path '*.en.md')
do
    SOURCE_FILE=${i/\.\/ja/\.}
    if [ ! -e ${SOURCE_FILE} ]; then
        DIRNAME=$(dirname ${SOURCE_FILE})
        BASENAME=$(basename ${SOURCE_FILE} .md)
        DIST=${DIRNAME/"."/"./${TARGET_LANG}"}/${BASENAME}*
        echo "${SOURCE_FILE} is Only In [./${TARGET_LANG}/]."
        echo "    REMOVE [${DIST}]"
        rm -f ${DIST}*
    fi
done

echo
echo '# ----------------------------------------------------------------------'
echo '# check git status'
echo '# ----------------------------------------------------------------------'
git status
