import React from 'react';
import { Stack } from '@mui/material';
import { StyledBodyTypography } from '../../pages/styled.js';
import { CodeBlock } from "react-code-blocks";
import { codeTheme } from '../../themes/themes.js';

function TextSection({ title, body, isCode, language }) {
  return (
    <Stack>
        {
          isCode ?
          <Stack gap='8px'>
            <StyledBodyTypography isAlternateColor sx={{margin:'0 10px'}}>{title}</StyledBodyTypography>   
            <CodeBlock
              text={body}
              language={language}
              showLineNumbers={true}
              theme={codeTheme}
            />
          </Stack> :
          <>
            <StyledBodyTypography isAlternateColor sx={{margin:'0 10px'}}>{title}</StyledBodyTypography>
            {body && body.split('\n').map((line, index, array) => (
                <React.Fragment key={index}>
                    <StyledBodyTypography sx={{margin:'0 10px'}}>
                        {line}
                    </StyledBodyTypography>
                    {index !== array.length - 1 ?  <br /> : null}
                </React.Fragment>
            ))}
          </>
        }
    </Stack>
  );
}

export default TextSection;
